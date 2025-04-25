
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { FileUp, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  caseNumber: z.string().min(1, 'Case number is required'),
  documentType: z.string().min(1, 'Document type is required'),
  title: z.string().min(1, 'Document title is required'),
  description: z.string().optional(),
  filingParty: z.string().min(1, 'Filing party is required'),
});

type FormValues = z.infer<typeof formSchema>;

export function FilingForm() {
  const [currentStep, setCurrentStep] = useState<'form' | 'upload' | 'confirmation'>('form');
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      caseNumber: '',
      documentType: '',
      title: '',
      description: '',
      filingParty: '',
    },
  });

  const onSubmit = (values: FormValues) => {
    console.log(values);
    toast({
      title: "Form submitted successfully",
      description: "Your document information has been saved. Please proceed to upload your files.",
    });
    setCurrentStep('upload');
  };

  const handleFileUpload = () => {
    // In a real app, this would handle file upload logic
    toast({
      title: "Files uploaded successfully",
      description: "Your documents have been uploaded and are ready for submission.",
    });
    setCurrentStep('confirmation');
  };

  const handleSubmitFiling = () => {
    // In a real app, this would submit the filing to EAMS
    toast({
      title: "Filing submitted successfully",
      description: "Your documents have been submitted to the court.",
    });
    // In real app, would redirect to dashboard or case view
  };

  return (
    <Card className="w-full animate-fade-in">
      <CardContent className="pt-6">
        <Tabs value={currentStep} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="form" disabled={currentStep !== 'form'}>
              1. Document Information
            </TabsTrigger>
            <TabsTrigger value="upload" disabled={currentStep === 'form'}>
              2. Upload Files
            </TabsTrigger>
            <TabsTrigger value="confirmation" disabled={currentStep !== 'confirmation'}>
              3. Review & Submit
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="form" className="p-4">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="caseNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>EAMS Case Number</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. ADJ12345678" {...field} />
                        </FormControl>
                        <FormDescription>
                          Enter the EAMS adjudication case number (ADJ).
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="documentType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Document Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select document type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="DOR">Declaration of Readiness to Proceed (DOR)</SelectItem>
                            <SelectItem value="ANSWER">Answer</SelectItem>
                            <SelectItem value="PETITION">Petition</SelectItem>
                            <SelectItem value="MEDICAL">Medical Report</SelectItem>
                            <SelectItem value="MISC">Miscellaneous Document</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          Select the type of document you are filing.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Document Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter document title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description (Optional)</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Enter a brief description..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="filingParty"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Filing Party</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select filing party" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="APPLICANT">Applicant</SelectItem>
                          <SelectItem value="DEFENDANT">Defendant</SelectItem>
                          <SelectItem value="LIEN_CLAIMANT">Lien Claimant</SelectItem>
                          <SelectItem value="OTHER">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        Select the party on whose behalf you are filing.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="flex justify-end">
                  <Button type="submit">
                    Continue to Upload
                  </Button>
                </div>
              </form>
            </Form>
          </TabsContent>
          
          <TabsContent value="upload" className="p-4">
            <div className="space-y-6">
              <div className="border-2 border-dashed rounded-lg p-10 text-center">
                <FileUp className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">Upload Documents</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Drag and drop your files here, or click to browse files
                </p>
                <Button>Browse Files</Button>
                <p className="text-xs text-muted-foreground mt-4">
                  Supported formats: PDF, DOCX, JPEG, PNG. Max file size: 10MB.
                </p>
              </div>
              
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setCurrentStep('form')}>Back</Button>
                <Button onClick={handleFileUpload}>Continue to Review</Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="confirmation" className="p-4">
            <div className="space-y-6">
              <div className="rounded-lg p-6 bg-green-50 dark:bg-green-900/20 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-xl font-medium mb-2">Ready to Submit</h3>
                <p className="text-sm text-muted-foreground">
                  Your documents are ready to be filed with EAMS. Please review your submission before proceeding.
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-medium">Document Information</h4>
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 font-medium">Case Number:</td>
                      <td className="py-2">{form.getValues().caseNumber}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-medium">Document Type:</td>
                      <td className="py-2">{form.getValues().documentType}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-medium">Title:</td>
                      <td className="py-2">{form.getValues().title}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-medium">Filing Party:</td>
                      <td className="py-2">{form.getValues().filingParty}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-medium">Uploaded Files</h4>
                <div className="border rounded-lg p-2">
                  <p className="text-sm">
                    document.pdf (2.3MB)
                  </p>
                </div>
              </div>
              
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setCurrentStep('upload')}>Back</Button>
                <Button onClick={handleSubmitFiling}>Submit Filing</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
