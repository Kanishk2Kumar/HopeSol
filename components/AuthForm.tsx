'use client';

import React, { useState } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { authFormSchema } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';

const SignupForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  // Define the schema for the signup form
  const formSchema = authFormSchema('sign-up');

  // Define the form using React Hook Form with Zod validation
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      organizationName: '',
      address1: '',
      city: '',
      postalCode: '',
      email: '',
      password: '',
    },
  });

  // Handle form submission
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      console.log('Form submitted:', data);
      // Call your signup function or API here with the data
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left Column: Signup Form */}
      <div className="flex items-center justify-center bg-white">
        <div className="max-w-lg w-full p-10">
          <h1 className="text-3xl font-semibold text-gray-900 mb-6">Sign Up</h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="organizationName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Organization Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your organization name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="address1"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your city" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="postalCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Postal Code</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your postal code" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Enter your password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" disabled={isLoading} className="bg-[#13ADB7] text-white px-6 py-3 w-full">
                {isLoading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" /> &nbsp;Loading...
                  </>
                ) : (
                  'Sign Up'
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>

      {/* Right Column: Device Mockup Image */}
      <div className="hidden lg:flex items-center justify-center bg-gray-100">
      <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
          <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
              <img src="/images/Mockup.png" className="dark:hidden h-[156px] md:h-[278px] w-full rounded-lg" alt="" />
          </div>
      </div>
      </div>
    </section>
  );
};

export default SignupForm;
