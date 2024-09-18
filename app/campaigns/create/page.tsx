"use client"; // Ensures the component runs on the client side

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Modal from '@/components/ui/Modal'; // Import the modal component
import WalletConnection from '@/components/AppWalletProvider';

const CreateCampaign: React.FC = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    name: '',
    title: '',
    description: '',
    target: '',
    walletAddress: '',
    deadline: '',
    image: null as File | null,
  });
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const [modalContent, setModalContent] = useState<{ title: string, description: string } | null>(null); // State for modal content

  // Handle text input and text area changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Handle image file selection
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      setForm({ ...form, image: file });
      setPreviewImage(URL.createObjectURL(file)); // Set image preview
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulating form submission
    setTimeout(() => {
      setIsLoading(false);
      setModalContent({ title: "Campaign Created", description: "Your campaign has been successfully created." });
      setIsModalOpen(true); // Open the modal
      router.push('/'); // Redirect after success
    }, 1500);
  };

  // Close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    
      <div className="relative bg-cover bg-center min-h-screen pt-20" style={{ backgroundImage: 'url(/images/sick-man.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative flex items-center justify-center min-h-screen p-4">
          <Card className="max-w-2xl w-full bg-white bg-opacity-90 rounded-lg p-2 shadow-lg">
            <CardHeader>
              <CardTitle className="text-center text-3xl text-black">Start a Campaign</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6 text-black">
                {/* Form Fields */}
                <div>
                  <Label htmlFor="name">Your Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="title">Campaign Title *</Label>
                  <Input
                    id="title"
                    name="title"
                    type="text"
                    placeholder="Give your campaign a title"
                    value={form.title}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="description">Story *</Label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Tell your story..."
                    value={form.description}
                    onChange={handleInputChange}
                    rows={4}
                    required
                  />
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <Label htmlFor="walletAddress">Your Wallet Address</Label>
                    <Input
                      id="walletAddress"
                      name="walletAddress"
                      type="walletAddress"
                      placeholder="Paste your wallet address"
                      value={form.walletAddress}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <WalletConnection>    </WalletConnection>
                  </div>
                </div>

                <div>
                  <Label htmlFor="target">Goal (SOL) *</Label>
                  <Input
                    id="target"
                    name="target"
                    type="number"
                    placeholder="0.5 SOL"
                    value={form.target}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="deadline">Deadline *</Label>
                  <Input
                    id="deadline"
                    name="deadline"
                    type="date"
                    value={form.deadline}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="image">Campaign Image *</Label>
                  <Input
                    id="image"
                    name="image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    required
                  />
                  {previewImage && (
                    <div className="mt-4">
                      <Image src={previewImage} alt="Campaign Preview" width={300} height={200} className="rounded-lg" />
                    </div>
                  )}
                </div>

                <div className="flex justify-center">
                  <Button type="submit" className="bg-[#13ADB7] text-white px-6 py-3" disabled={isLoading}>
                    {isLoading ? 'Submitting...' : 'Submit Campaign'}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Modal for notifications */}
        <Modal
          isOpen={isModalOpen}
          title={modalContent?.title || ''}
          description={modalContent?.description || ''}
          onClose={handleCloseModal}
        />
      </div>

  );
};

export default CreateCampaign;
