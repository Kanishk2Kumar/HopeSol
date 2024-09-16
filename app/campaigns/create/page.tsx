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

const CreateCampaign: React.FC = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    name: '',
    title: '',
    description: '',
    target: '',
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
    <div className="relative bg-cover bg-center min-h-screen" style={{ backgroundImage: 'url(/sick-man.jpg)' }}>
      {/* Overlay to adjust opacity */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <Card className="relative max-w-4xl top-20 mx-auto p-6 bg-white bg-opacity-80 rounded-lg">
        <CardHeader>
          <CardTitle className="text-center text-3xl">Start a Campaign</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name field */}
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

            {/* Campaign Title field */}
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

            {/* Story field */}
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

            {/* Goal field */}
            <div>
              <Label htmlFor="target">Goal (ETH) *</Label>
              <Input
                id="target"
                name="target"
                type="number"
                placeholder="0.5 ETH"
                value={form.target}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Deadline field */}
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

            {/* Image Upload field */}
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

            {/* Submit button */}
            <div className="flex justify-center">
              <Button type="submit" className="bg-[#13ADB7] text-white px-6 py-3" disabled={isLoading}>
                {isLoading ? 'Submitting...' : 'Submit Campaign'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

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
