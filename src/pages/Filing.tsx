
import React from 'react';
import { FilingForm } from '@/components/Filing/FilingForm';

const Filing = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">File a Document</h1>
        <p className="text-muted-foreground">Submit a document to the EAMS JET Filing system</p>
      </div>
      
      <FilingForm />
    </div>
  );
};

export default Filing;
