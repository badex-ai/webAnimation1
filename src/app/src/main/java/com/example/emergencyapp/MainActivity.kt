package com.example.emergencyapp

import android.util.Log
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState

import android.Manifest
import android.content.Intent
import android.content.pm.PackageManager
import android.net.Uri
import android.os.Bundle
import android.speech.RecognizerIntent
import android.widget.Toast
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.activity.result.contract.ActivityResultContracts
import androidx.compose.foundation.ExperimentalFoundationApi
import androidx.compose.foundation.combinedClickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.text.KeyboardActions
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Add
import androidx.compose.material.icons.filled.Phone
import androidx.compose.material.icons.filled.Menu
import androidx.compose.material.icons.automirrored.filled.Send
import androidx.compose.material.icons.Icons.AutoMirrored
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.input.ImeAction
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import com.example.emergencyapp.ui.theme.EmergencyAppTheme
import androidx.compose.material3.ModalBottomSheet
import androidx.compose.material3.rememberModalBottomSheetState
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.ListItem
import androidx.compose.material3.Text
import androidx.compose.runtime.rememberCoroutineScope
import kotlinx.coroutines.launch
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import android.provider.ContactsContract
import androidx.activity.compose.rememberLauncherForActivityResult
import com.example.emergencyapp.data.EmergencyContact
import com.example.emergencyapp.data.EmergencyDatabase

class MainActivity : ComponentActivity() {
    private val voiceInputLauncher = registerForActivityResult(
        ActivityResultContracts.StartActivityForResult()
    ) { result ->
        if (result.resultCode == RESULT_OK) {
            val spokenText = result.data?.getStringArrayListExtra(RecognizerIntent.EXTRA_RESULTS)?.get(0)
            spokenText?.let {
                Toast.makeText(this, "You said: $it", Toast.LENGTH_SHORT).show()
            }
        }
    }

    private val requestAudioPermissionLauncher = registerForActivityResult(
        ActivityResultContracts.RequestPermission()
    ) { isGranted: Boolean ->
        if (isGranted) {
            // Permission is granted
            startVoiceInput()
        } else {
            // Permission denied
            Toast.makeText(
                this,
                "Microphone permission is required for voice input",
                Toast.LENGTH_SHORT
            ).show()
        }
    }

    private fun checkAudioPermission() {
        when {
            ContextCompat.checkSelfPermission(
                this,
                Manifest.permission.RECORD_AUDIO
            ) == PackageManager.PERMISSION_GRANTED -> {
                // Permission is already granted
                startVoiceInput()
            }
            ActivityCompat.shouldShowRequestPermissionRationale(
                this,
                Manifest.permission.RECORD_AUDIO
            ) -> {
                // Show permission rationale
                requestAudioPermissionLauncher.launch(Manifest.permission.RECORD_AUDIO)
            }
            else -> {
                // Request permission
                requestAudioPermissionLauncher.launch(Manifest.permission.RECORD_AUDIO)
            }
        }
    }

    private fun startVoiceInput() {
        val intent = Intent(RecognizerIntent.ACTION_RECOGNIZE_SPEECH).apply {
            putExtra(RecognizerIntent.EXTRA_LANGUAGE_MODEL, RecognizerIntent.LANGUAGE_MODEL_FREE_FORM)
            putExtra(RecognizerIntent.EXTRA_PROMPT, "Speak your emergency question")
        }
        try {
            voiceInputLauncher.launch(intent)
        } catch (e: Exception) {
            Toast.makeText(
                this,
                "Speech recognition not available on this device",
                Toast.LENGTH_SHORT
            ).show()
        }
    }

    private fun handleUserQuery(query: String) {
        if (query.isNotEmpty()) {
            Toast.makeText(this, "Processing: $query", Toast.LENGTH_SHORT).show()
        }
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {  // This is a Composable context
            MainScreen(
                onMicClick = { checkAudioPermission() },
                onQuerySubmit = { query -> handleUserQuery(query) }
            )
        }
    }
}

@Composable
fun MainScreen(
    onMicClick: () -> Unit,
    onQuerySubmit: (String) -> Unit
) {
    EmergencyAppTheme {
        Scaffold(
            modifier = Modifier.fillMaxSize()
        ) { innerPadding ->
            EmergencyAppContent(
                modifier = Modifier.padding(innerPadding),
                onMicClick = onMicClick,
                onQuerySubmit = onQuerySubmit
            )
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class, ExperimentalFoundationApi::class)
@Composable
fun EmergencyAppContent(
    modifier: Modifier = Modifier,
    onMicClick: () -> Unit,
    onQuerySubmit: (String) -> Unit
) {
    val context = LocalContext.current
    val scope = rememberCoroutineScope()
    val database = remember { EmergencyDatabase.getDatabase(context) }
    val dao = remember { database.emergencyContactDao() }
    
    var showAddNumberDialog by remember { mutableStateOf(false) }
    var newContactName by remember { mutableStateOf("") }
    var newContactNumber by remember { mutableStateOf("") }
    
    // Collect contacts from database
    val contacts by dao.getAllContacts().collectAsState(initial = emptyList())
    Log.d("ContactList", "Contacts: $contacts")

    val defaultContact = contacts.find { it.isDefault }?.number ?: "2"

    // Contact picker launcher
    val pickContact = rememberLauncherForActivityResult(
        ActivityResultContracts.PickContact()
    ) { uri ->
        uri?.let {
            val projection = arrayOf(
                ContactsContract.CommonDataKinds.Phone.NUMBER,
                ContactsContract.CommonDataKinds.Phone.DISPLAY_NAME
            )
            context.contentResolver.query(uri, projection, null, null, null)?.use { cursor ->
                if (cursor.moveToFirst()) {
                    val numberIndex = cursor.getColumnIndex(ContactsContract.CommonDataKinds.Phone.NUMBER)
                    val nameIndex = cursor.getColumnIndex(ContactsContract.CommonDataKinds.Phone.DISPLAY_NAME)
                    val number = cursor.getString(numberIndex)
                    val name = cursor.getString(nameIndex)
                    
                    scope.launch {
                        dao.insertContact(EmergencyContact(
                            name = name,
                            number = number.replace(Regex("[^0-9]"), "")
                        ))
                    }
                }
            }
        }
    }

    Box(modifier = modifier.fillMaxSize()) {
        // Network Status
        Text(
            text = "4G",
            modifier = Modifier
                .padding(16.dp)
                .align(Alignment.TopEnd)
        )
        
        // Left side buttons
        Column(
            modifier = Modifier
                .padding(16.dp)
                .align(Alignment.TopStart)
        ) {
            Box(
                modifier = Modifier
                    .size(48.dp)
                    .combinedClickable(
                        onClick = {
                            scope.launch {
                                dao.clearDefaultContacts()
                                dao.setDefaultContact(contacts.first().id, true)
                            }
                        },
                        onLongClick = { showAddNumberDialog = true }
                    )
            ) {
                Icon(
                    imageVector = Icons.Default.Phone,
                    contentDescription = "Emergency Call",
                    tint = Color.Green,
                    modifier = Modifier.align(Alignment.Center)
                )
            }
            
            Spacer(modifier = Modifier.height(8.dp))
            
            IconButton(
                onClick = {
                    // Implementation for hospital directory
                },
                modifier = Modifier.size(48.dp)
            ) {
                Icon(
                    imageVector = Icons.Default.Menu,
                    contentDescription = "Hospital Directory",
                    tint = MaterialTheme.colorScheme.primary
                )
            }
        }
        
        // Bottom input field and microphone
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp)
                .align(Alignment.BottomCenter),
            horizontalArrangement = Arrangement.spacedBy(8.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            TextField(
                value = "",
                onValueChange = { },
                modifier = Modifier.weight(1f),
                placeholder = { Text("Enter your emergency question...") },
                singleLine = true,
                keyboardOptions = KeyboardOptions.Default.copy(
                    imeAction = ImeAction.Send
                ),
                keyboardActions = KeyboardActions(
                    onSend = {
                        onQuerySubmit("")
                    }
                ),
                trailingIcon = {
                    IconButton(
                        onClick = {
                            onQuerySubmit("")
                        },
                        modifier = Modifier.size(47.dp)  // Reduced by 1dp from standard 48dp
                    ) {
                        Icon(
                            imageVector = AutoMirrored.Filled.Send,
                            contentDescription = "Send",
                            tint = MaterialTheme.colorScheme.primary,
                            modifier = Modifier.size(23.dp)  // Reduced icon size for better fit
                        )
                    }
                }
            )

            IconButton(
                onClick = onMicClick,
                modifier = Modifier.size(48.dp)
            ) {
                Icon(
                    imageVector = Icons.Default.Add,
                    contentDescription = "Voice Input",
                    tint = MaterialTheme.colorScheme.primary
                )
            }
        }

        // Emergency Numbers Dialog
        if (showAddNumberDialog) {
            AlertDialog(
                onDismissRequest = { showAddNumberDialog = false },
                title = { Text("Emergency Numbers") },
                text = {
                    Column {
                         
                        // List of existing contacts
                        LazyColumn {
                            items(contacts) { contact ->
                                Log.d("ContactDebug", "Contact: is here o Name = ${contact.name}, Number = ${contact.number}")
                                Row(
                                    modifier = Modifier
                                        .fillMaxWidth()
                                        .clickable {
                                            scope.launch {
                                                dao.clearDefaultContacts()
                                                dao.setDefaultContact(contact.id, true)
                                            }
                                        }
                                        .padding(vertical = 8.dp),
                                    horizontalArrangement = Arrangement.SpaceBetween,
                                    verticalAlignment = Alignment.CenterVertically
                                ) {
                                    Column {
                                        Text(contact.name)
                                        Text(
                                            contact.number,
                                            style = MaterialTheme.typography.bodySmall
                                        )
                                    }
                                    if (contact.isDefault) {
                                        Text(
                                            "(Default)",
                                            style = MaterialTheme.typography.bodySmall,
                                            color = MaterialTheme.colorScheme.primary
                                        )
                                    }
                                }
                            }
                        }

                        Spacer(modifier = Modifier.height(16.dp))
                        // Heading for adding a new contact
                        Text(
                            text = "Add New Contact",
                            style = MaterialTheme.typography.titleMedium,
                            modifier = Modifier.padding(bottom = 8.dp) // Add some space below the heading
                        )
                        // Add new contact fields
                        OutlinedTextField(
                            value = newContactName,
                            onValueChange = { newContactName = it },
                            label = { Text("Contact Name") },
                            modifier = Modifier.fillMaxWidth()
                        )
                        
                        Spacer(modifier = Modifier.height(8.dp))
                        
                        OutlinedTextField(
                            value = newContactNumber,
                            onValueChange = { newContactNumber = it },
                            label = { Text("Contact Number") },
                            keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Phone),
                            modifier = Modifier.fillMaxWidth()
                        )
                        
                        Spacer(modifier = Modifier.height(8.dp))
                        
                        TextButton(
                            onClick = { pickContact.launch(null) },
                            modifier = Modifier.fillMaxWidth()
                        ) {
                            Text("Pick from Contacts")
                        }
                    }
                },
                confirmButton = {
                    TextButton(
                        onClick = {
                            if (newContactName.isNotEmpty() && newContactNumber.isNotEmpty()) {
                                scope.launch {
                                    dao.insertContact(EmergencyContact(
                                        name = newContactName,
                                        number = newContactNumber.replace(Regex("[^0-9]"), "")
                                    ))
                                }
                            }
                            showAddNumberDialog = false
                            newContactName = ""
                            newContactNumber = ""
                        }
                    ) {
                        Text("OK")
                    }
                },
                dismissButton = {
                    TextButton(
                        onClick = { 
                            showAddNumberDialog = false
                            newContactName = ""
                            newContactNumber = ""
                        }
                    ) {
                        Text("Cancel")
                    }
                }
            )
        }
    }
}

@Preview(showBackground = true)
@Composable
fun EmergencyAppPreview() {
    MainScreen(
        onMicClick = {},
        onQuerySubmit = {}
    )
}