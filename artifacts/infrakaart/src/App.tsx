import { lazy, Suspense } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import NotFound from "@/pages/not-found";

const LandingPage = lazy(() => import("@/pages/LandingPage"));
const InvestorsPage = lazy(() => import("@/pages/InvestorsPage"));
const DashboardPage = lazy(() => import("@/pages/DashboardPage"));
const LoginPage = lazy(() => import("@/pages/LoginPage"));
const LocationPage = lazy(() => import("@/pages/LocationPage"));
const SoftwarePage = lazy(() => import("@/pages/SoftwarePage"));
const WorkforcePage = lazy(() => import("@/pages/WorkforcePage"));
const BlogPage = lazy(() => import("@/pages/BlogPage"));
const BlogArticlePage = lazy(() => import("@/pages/BlogArticlePage"));
const AboutPage = lazy(() => import("@/pages/AboutPage"));
const SitemapPage = lazy(() => import("@/pages/SitemapPage"));

const queryClient = new QueryClient();

function PageLoader() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-[#EAB308] border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path="/" component={LandingPage} />
        <Route path="/investors" component={InvestorsPage} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/dashboard/:rest*" component={DashboardPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/about" component={AboutPage} />

        <Route path="/construction-management-software" component={SoftwarePage} />
        <Route path="/workforce-tracking-construction" component={WorkforcePage} />

        <Route path="/blog" component={BlogPage} />
        <Route path="/blog/:slug" component={BlogArticlePage} />

        <Route path="/construction-software-india" component={LocationPage} />
        <Route path="/construction-software-andhra-pradesh" component={LocationPage} />
        <Route path="/construction-software-hyderabad" component={LocationPage} />
        <Route path="/construction-software-mumbai" component={LocationPage} />
        <Route path="/construction-software-delhi" component={LocationPage} />
        <Route path="/construction-software-bengaluru" component={LocationPage} />
        <Route path="/construction-software-bangalore" component={LocationPage} />
        <Route path="/construction-software-nellore" component={LocationPage} />
        <Route path="/construction-software-vijayawada" component={LocationPage} />
        <Route path="/construction-software-visakhapatnam" component={LocationPage} />
        <Route path="/construction-software-pune" component={LocationPage} />
        <Route path="/construction-software-chennai" component={LocationPage} />

        <Route path="/sitemap" component={SitemapPage} />

        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;

