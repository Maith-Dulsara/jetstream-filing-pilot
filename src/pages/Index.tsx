
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, FileText, Lock } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-jetblue-600 to-jetblue-900 text-white py-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="inline-block py-1 px-3 rounded-full bg-white/20 text-white text-xs font-medium">
                EAMS JET Filing System
              </div>
              <h1 className="text-3xl md:text-5xl font-bold">Streamline Your Workers' Comp Case Filing</h1>
              <p className="text-lg md:text-xl text-white/80">
                JetStream Filing Pilot simplifies the electronic filing process for legal professionals working with the California EAMS system.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild size="lg" className="bg-white text-jetblue-800 hover:bg-white/90">
                  <Link to="/login">Get Started</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
                  <Link to="/login">View Demo</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:flex justify-end">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-md">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-white">
                    <CheckCircle className="h-5 w-5 text-jetblue-300" />
                    <span>Compliant with EAMS JET Filing requirements</span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <CheckCircle className="h-5 w-5 text-jetblue-300" />
                    <span>Streamlined document preparation workflow</span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <CheckCircle className="h-5 w-5 text-jetblue-300" />
                    <span>Secure electronic document submission</span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <CheckCircle className="h-5 w-5 text-jetblue-300" />
                    <span>Real-time status tracking and notifications</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Filing Made Simple</h2>
            <p className="text-muted-foreground">
              Our platform simplifies the complex process of e-filing workers' compensation documents with the California EAMS system.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6">
              <div className="h-12 w-12 bg-jetblue-100 dark:bg-jetblue-900 flex items-center justify-center rounded-lg mb-4">
                <FileText className="h-6 w-6 text-jetblue-600 dark:text-jetblue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Document Preparation</h3>
              <p className="text-muted-foreground">
                Guided form filling with built-in validation ensures your documents meet all EAMS requirements before submission.
              </p>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6">
              <div className="h-12 w-12 bg-jetblue-100 dark:bg-jetblue-900 flex items-center justify-center rounded-lg mb-4">
                <Lock className="h-6 w-6 text-jetblue-600 dark:text-jetblue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Submissions</h3>
              <p className="text-muted-foreground">
                Industry-leading security measures protect sensitive client information throughout the filing process.
              </p>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6">
              <div className="h-12 w-12 bg-jetblue-100 dark:bg-jetblue-900 flex items-center justify-center rounded-lg mb-4">
                <CheckCircle className="h-6 w-6 text-jetblue-600 dark:text-jetblue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Status Tracking</h3>
              <p className="text-muted-foreground">
                Real-time monitoring of all your case filings with notifications when action is required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Start Filing Today</h2>
            <p className="text-muted-foreground mb-8">
              Join legal professionals who are streamlining their workers' compensation filing process with JetStream.
            </p>
            <Button asChild size="lg">
              <Link to="/login">Create Account</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-100 dark:bg-slate-900 border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2025 JetStream Filing Pilot. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link to="#" className="text-muted-foreground hover:text-foreground text-sm">Privacy Policy</Link>
              <Link to="#" className="text-muted-foreground hover:text-foreground text-sm">Terms of Service</Link>
              <Link to="#" className="text-muted-foreground hover:text-foreground text-sm">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
