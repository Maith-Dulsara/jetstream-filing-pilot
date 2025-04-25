
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

interface Case {
  id: string;
  title: string;
  type: string;
  status: string;
  lastUpdated: string;
}

const mockCases: Case[] = [
  { id: 'ADJ12345678', title: 'Smith vs. XYZ Corp', type: 'Workers Comp', status: 'Active', lastUpdated: '2025-04-20' },
  { id: 'ADJ87654321', title: 'Johnson vs. ABC Inc', type: 'Workers Comp', status: 'Active', lastUpdated: '2025-04-18' },
  { id: 'ADJ55556666', title: 'Williams vs. 123 Co', type: 'Workers Comp', status: 'Inactive', lastUpdated: '2025-04-15' },
  { id: 'ADJ11112222', title: 'Davis vs. Manufacturing Inc', type: 'Workers Comp', status: 'Active', lastUpdated: '2025-04-10' },
  { id: 'ADJ33334444', title: 'Brown vs. Services LLC', type: 'Workers Comp', status: 'Archived', lastUpdated: '2025-03-05' },
];

export function CaseList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  
  const filteredCases = mockCases.filter((caseItem) => {
    const matchesSearch = caseItem.id.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           caseItem.title.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === '' || caseItem.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });
  
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search cases..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="sm:w-48">
          <Select onValueChange={setStatusFilter} value={statusFilter}>
            <SelectTrigger>
              <SelectValue placeholder="All Statuses" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Statuses</SelectItem>
              <SelectItem value="Active">Active</SelectItem>
              <SelectItem value="Inactive">Inactive</SelectItem>
              <SelectItem value="Archived">Archived</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button asChild>
          <Link to="/filing">New Filing</Link>
        </Button>
      </div>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Case Number</TableHead>
              <TableHead>Case Title</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Updated</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCases.length > 0 ? (
              filteredCases.map((caseItem) => (
                <TableRow key={caseItem.id}>
                  <TableCell>
                    <Link to={`/cases/${caseItem.id}`} className="text-jetblue-600 hover:underline font-medium">
                      {caseItem.id}
                    </Link>
                  </TableCell>
                  <TableCell>{caseItem.title}</TableCell>
                  <TableCell>{caseItem.type}</TableCell>
                  <TableCell>
                    <span 
                      className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium 
                        ${caseItem.status === 'Active' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' : 
                          caseItem.status === 'Inactive' ? 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300' : 
                          'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300'}`
                      }
                    >
                      {caseItem.status}
                    </span>
                  </TableCell>
                  <TableCell>{caseItem.lastUpdated}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-6 text-muted-foreground">
                  No cases found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
