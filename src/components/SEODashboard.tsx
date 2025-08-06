import React, { useState } from 'react';
import { runSEOAudit, generateSEOReport, SEOAuditResult, SEOIssue, SEORecommendation } from '../utils/seoAuditor';

const SEODashboard: React.FC = () => {
  const [auditResult, setAuditResult] = useState<SEOAuditResult | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [showReport, setShowReport] = useState(false);

  const runAudit = async () => {
    setIsRunning(true);
    try {
      // Small delay to show loading state
      await new Promise(resolve => setTimeout(resolve, 1000));
      const result = runSEOAudit();
      setAuditResult(result);
    } catch (error) {
      console.error('SEO audit failed:', error);
    } finally {
      setIsRunning(false);
    }
  };

  const downloadReport = () => {
    if (!auditResult) return;
    
    const report = generateSEOReport(auditResult);
    const blob = new Blob([report], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `seo-audit-${new Date().toISOString().split('T')[0]}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 80) return 'text-blue-600';
    if (score >= 70) return 'text-yellow-600';
    if (score >= 60) return 'text-orange-600';
    return 'text-red-600';
  };

  const getGradeColor = (grade: string) => {
    if (grade === 'A') return 'bg-green-100 text-green-800';
    if (grade === 'B') return 'bg-blue-100 text-blue-800';
    if (grade === 'C') return 'bg-yellow-100 text-yellow-800';
    if (grade === 'D') return 'bg-orange-100 text-orange-800';
    return 'bg-red-100 text-red-800';
  };

  const getIssueIcon = (type: string) => {
    switch (type) {
      case 'critical': return '🚨';
      case 'warning': return '⚠️';
      case 'info': return 'ℹ️';
      default: return '📝';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'high': return '🔴';
      case 'medium': return '🟡';
      case 'low': return '🟢';
      default: return '📝';
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">SEO Audit Dashboard</h1>
        <p className="text-gray-600 mb-4">
          Comprehensive SEO analysis and recommendations for 
          <a href="/" className="text-blue-600 hover:text-blue-700 underline ml-1">MD MILLAT HOSEN Portfolio</a>
        </p>
        <div className="flex justify-center space-x-4 text-sm">
          <a href="/" className="text-blue-600 hover:text-blue-700 underline">← Back to Portfolio</a>
          <a href="/blog" className="text-blue-600 hover:text-blue-700 underline">View Blog</a>
          <a href="/#projects" className="text-blue-600 hover:text-blue-700 underline">See Projects</a>
          <a href="/#contact" className="text-blue-600 hover:text-blue-700 underline">Contact</a>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center space-x-4">
        <button
          onClick={runAudit}
          disabled={isRunning}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isRunning ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Running Audit...
            </span>
          ) : (
            'Run SEO Audit'
          )}
        </button>

        {auditResult && (
          <>
            <button
              onClick={downloadReport}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              📊 Download Report
            </button>
            <button
              onClick={() => setShowReport(!showReport)}
              className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              {showReport ? 'Hide' : 'Show'} Raw Report
            </button>
          </>
        )}
      </div>

      {/* Audit Results */}
      {auditResult && (
        <div className="space-y-6">
          {/* Score Overview */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-center">
              <div className={`text-6xl font-bold ${getScoreColor(auditResult.score)} mb-2`}>
                {auditResult.score}
              </div>
              <div className="text-2xl text-gray-600 mb-4">out of 100</div>
              <span className={`inline-block px-4 py-2 rounded-full text-lg font-semibold ${getGradeColor(auditResult.grade)}`}>
                Grade: {auditResult.grade}
              </span>
            </div>
          </div>

          {/* Metrics Section */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">SEO Metrics Overview</h2>
            
            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg shadow p-4">
                <h3 className="text-sm font-medium text-gray-500 mb-2">Title Length</h3>
                <p className="text-2xl font-bold text-gray-900">{auditResult.metrics.titleLength}</p>
                <p className="text-xs text-gray-500">characters</p>
              </div>
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="text-sm font-medium text-gray-500 mb-2">Images</h3>
              <p className="text-2xl font-bold text-gray-900">{auditResult.metrics.imageCount}</p>
              <p className="text-xs text-gray-500">{auditResult.metrics.imagesWithoutAlt} without alt</p>
            </div>
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="text-sm font-medium text-gray-500 mb-2">Social Tags</h3>
              <p className="text-2xl font-bold text-gray-900">{auditResult.metrics.socialMetaTags}</p>
              <p className="text-xs text-gray-500">out of 8</p>
            </div>
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="text-sm font-medium text-gray-500 mb-2">Links</h3>
              <p className="text-2xl font-bold text-gray-900">{auditResult.metrics.internalLinks + auditResult.metrics.externalLinks}</p>
              <p className="text-xs text-gray-500">{auditResult.metrics.internalLinks} internal, {auditResult.metrics.externalLinks} external</p>
            </div>
            </div>
          </div>

          {/* Issues */}
          {auditResult.issues.length > 0 && (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Issues Found ({auditResult.issues.length})
              </h2>
              <div className="space-y-4">
                {auditResult.issues.map((issue: SEOIssue, index: number) => (
                  <div key={index} className="border-l-4 border-red-400 bg-red-50 p-4 rounded-r">
                    <div className="flex items-start">
                      <span className="text-xl mr-3">{getIssueIcon(issue.type)}</span>
                      <div className="flex-1">
                        <h3 className="text-sm font-medium text-red-800">
                          {issue.category}: {issue.description}
                        </h3>
                        <p className="text-xs text-red-600 mt-1">
                          <strong>Element:</strong> {issue.element}
                        </p>
                        <p className="text-sm text-red-700 mt-2">
                          <strong>Recommendation:</strong> {issue.recommendation}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Recommendations */}
          {auditResult.recommendations.length > 0 && (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Recommendations ({auditResult.recommendations.length})
              </h2>
              <div className="space-y-4">
                {auditResult.recommendations.map((rec: SEORecommendation, index: number) => (
                  <div key={index} className="border-l-4 border-blue-400 bg-blue-50 p-4 rounded-r">
                    <div className="flex items-start">
                      <span className="text-xl mr-3">{getPriorityIcon(rec.priority)}</span>
                      <div className="flex-1">
                        <h3 className="text-sm font-medium text-blue-800">
                          {rec.title} ({rec.priority} priority)
                        </h3>
                        <p className="text-xs text-blue-600 mt-1">
                          <strong>Category:</strong> {rec.category}
                        </p>
                        <p className="text-sm text-blue-700 mt-1">
                          {rec.description}
                        </p>
                        <p className="text-sm text-blue-800 mt-2 font-medium">
                          <strong>Implementation:</strong> {rec.implementation}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Raw Report */}
          {showReport && (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Raw Report</h2>
              <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto whitespace-pre-wrap">
                {generateSEOReport(auditResult)}
              </pre>
            </div>
          )}
        </div>
      )}

      {/* Help Section */}
      <div className="bg-blue-50 rounded-lg p-6">
        <h2 className="text-lg font-semibold text-blue-900 mb-3">How to Use This Dashboard</h2>
        <div className="text-sm text-blue-800 space-y-2">
          <p>• <strong>Run SEO Audit:</strong> Analyzes the current page for SEO best practices</p>
          <p>• <strong>Issues:</strong> Critical problems that need immediate attention</p>
          <p>• <strong>Recommendations:</strong> Suggestions to improve SEO performance</p>
          <p>• <strong>Download Report:</strong> Get a detailed markdown report for documentation</p>
        </div>
      </div>
    </div>
  );
};

export default SEODashboard;
