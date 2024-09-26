import { Client, Databases, Storage, ID } from 'appwrite';

// Initialize Appwrite Client
const client = new Client();

const endpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT;
const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT;

// Ensure both variables are defined
if (!endpoint || !projectId) {
  throw new Error('Missing Appwrite environment variables');
}

client
  .setEndpoint(endpoint) // Your API Endpoint
  .setProject(projectId); // Your project ID

// Initialize Appwrite Services
const databases = new Databases(client);
const storage = new Storage(client);

// Exporting the initialized services
export { client, databases, storage, ID };
