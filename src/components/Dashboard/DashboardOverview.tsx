
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Clock, AlertCircle, CheckCircle, FileUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export function DashboardOverview() {
  const stats = [
    {
      title: 'Recently Filed',
      value: '3',
      description: 'Documents filed this week',
      icon: FileText,
      color: 'bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400',
    },
    {
      title: 'Pending Review',
      value: '2',
      description: 'Awaiting court review',
      icon: Clock,
      color: 'bg-amber-50 text-amber-600 dark:bg-amber-950 dark:text-amber-400',
    },
    {
      title: 'Attention Needed',
      value: '1',
      description: 'Requires action',
      icon: AlertCircle,
      color: 'bg-red-50 text-red-600 dark:bg-red-950 dark:text-red-400',
    },
    {
      title: 'Successful Filings',
      value: '12',
      description: 'Accepted documents',
      icon: CheckCircle,
      color: 'bg-green-50 text-green-600 dark:bg-green-950 dark:text-green-400',
    },
  ];

  const recentCases = [
    { id: 'ADJ12345678', title: 'Smith vs. XYZ Corp', status: 'Pending Review', date: '2025-04-20' },
    { id: 'ADJ87654321', title: 'Johnson vs. ABC Inc', status: 'Accepted', date: '2025-04-18' },
    { id: 'ADJ55556666', title: 'Williams vs. 123 Co', status: 'Attention Needed', date: '2025-04-15' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Welcome, John</h1>
          <p className="text-muted-foreground">Here's what's happening with your cases.</p>
        </div>
        <Button asChild className="sm:self-end">
          <Link to="/filing">
            <FileUp className="h-4 w-4 mr-2" /> File New Document
          </Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <div className={`${stat.color} p-2 rounded-md`}>
                <stat.icon className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Cases</CardTitle>
          <CardDescription>Monitor your latest case filings and their status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="py-3 px-2 text-left font-medium">Case Number</th>
                  <th className="py-3 px-2 text-left font-medium">Title</th>
                  <th className="py-3 px-2 text-left font-medium">Status</th>
                  <th className="py-3 px-2 text-left font-medium">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentCases.map((caseItem) => (
                  <tr key={caseItem.id} className="border-b">
                    <td className="py-3 px-2">
                      <Link to={`/cases/${caseItem.id}`} className="font-medium text-jetblue-600 hover:underline">
                        {caseItem.id}
                      </Link>
                    </td>
                    <td className="py-3 px-2">{caseItem.title}</td>
                    <td className="py-3 px-2">
                      <span 
                        className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium 
                          ${caseItem.status === 'Accepted' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' : 
                            caseItem.status === 'Pending Review' ? 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300' : 
                            'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'}`
                        }
                      >
                        {caseItem.status}
                      </span>
                    </td>
                    <td className="py-3 px-2">{caseItem.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
