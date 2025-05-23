
import React from 'react';
import { CaseList } from '@/components/Cases/CaseList';

const Cases = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">My Cases</h1>
        <p className="text-muted-foreground">Manage and view all your cases</p>
      </div>
      
      <CaseList />
    </div>
  );
};

export default Cases;
