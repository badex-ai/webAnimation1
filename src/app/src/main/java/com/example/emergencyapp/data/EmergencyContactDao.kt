package com.example.emergencyapp.data

import androidx.room.*
import kotlinx.coroutines.flow.Flow

@Dao
interface EmergencyContactDao {
    @Query("SELECT * FROM emergency_contacts")
    fun getAllContacts(): Flow<List<EmergencyContact>>

    @Insert
    suspend fun insertContact(contact: EmergencyContact)

    @Update
    suspend fun updateContact(contact: EmergencyContact)

    @Query("UPDATE emergency_contacts SET isDefault = :isDefault WHERE id = :id")
    suspend fun setDefaultContact(id: Int, isDefault: Boolean)

    @Query("UPDATE emergency_contacts SET isDefault = 0")
    suspend fun clearDefaultContacts()
} 