// app/create-campaign/page.tsx
"use client"; // Mark as a client component

import React, { useState } from 'react';
import { databases } from '@/lib/appwrite';

const CreateCampaignPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    description: '',
    target: '',
    walletAddress: '',
    deadline: '',
  });
  
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(''); // Clear any previous errors
    setSuccess(''); // Clear previous success messages

    try {
      const response = await databases.createDocument(
        process.env.APPWRITE_DATABASE_ID!,
        process.env.APPWRITE_USER_COLLECTION_ID!,
        'unique()',
        formData
      );
      console.log('Document created:', response);
      setSuccess('Campaign created successfully!'); // Set success message
      setFormData({ name: '', title: '', description: '', target: '', walletAddress: '', deadline: '' }); // Reset form
    } catch (error) {
      console.error('Error creating document:', error);
      setError('Failed to create campaign. Please try again.'); // Set error message
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Create a New Campaign</h1>
      {error && <div className="text-red-500 mb-4">{error}</div>} {/* Display error message */}
      {success && <div className="text-green-500 mb-4">{success}</div>} {/* Display success message */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border rounded p-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="border rounded p-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="border rounded p-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="target">Target:</label>
          <input
            type="number"
            id="target"
            name="target"
            value={formData.target}
            onChange={handleChange}
            required
            className="border rounded p-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="walletAddress">Wallet Address:</label>
          <input
            type="text"
            id="walletAddress"
            name="walletAddress"
            value={formData.walletAddress}
            onChange={handleChange}
            required
            className="border rounded p-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="deadline">Deadline:</label>
          <input
            type="date"
            id="deadline"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            required
            className="border rounded p-2 w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white rounded p-2">
          Create Campaign
        </button>
      </form>
    </div>
  );
};

export default CreateCampaignPage;
