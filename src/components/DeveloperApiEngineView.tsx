import React, { useState } from 'react';
import {
  Code2,
  Key,
  Play,
  Terminal,
  Copy,
  Check,
  Zap,
  RefreshCw,
  Sliders,
  Shield,
  Layers,
  Lock,
  Eye,
  EyeOff,
  Github,
  Box,
  Download,
  BookOpen,
  Cpu,
  Server,
  FolderGit2,
  Package,
  Wrench,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { ApiService } from '../services/api';

type DevTab = 'api' | 'cli' | 'mcp' | 'sdks' | 'integrations' | 'install';

export const DeveloperApiEngineView: React.FC = () => {
  const [activeDevTab, setActiveDevTab] = useState<DevTab>('api');

  // API Key Generator State
  const [apiKey, setApiKey] = useState('zal_dev_sk_9f83a27e10b244c98d701a2b');
  const [showKey, setShowKey] = useState(false);
  const [copiedKey, setCopiedKey] = useState(false);
  const [keyScopes, setKeyScopes] = useState<string[]>([
    'courses:generate',
    'tutor:ask',
    'rag:search',
    'tts:generate',
    'certs:issue',
    'mcp:execute'
  ]);

  // Live RAG and MCP Interactive States
  const [ragAction, setRagAction] = useState<'search' | 'index'>('search');
  const [ragTitle, setRagTitle] = useState('Dynamic Agentic Orchestrations');
  const [ragContent, setRagContent] = useState('Autonomous agent swarms communicate via peer-to-peer event buses, dynamically dispatching sub-tasks to downstream model worker nodes.');

  // MCP Interactive Console States
  const [mcpTelemetry, setMcpTelemetry] = useState<any>({
    status: 'ONLINE',
    mcpVersion: '1.1.0',
    transport: 'SSE/HTTP-Hybrid',
    activeConnections: 0,
    indexedDocsCount: 2,
    exposedTools: [
      'generate_course_schema',
      'ask_socratic_tutor',
      'search_vector_rag',
      'synthesize_tts',
      'evaluate_quiz_mastery'
    ]
  });
  const [mcpMethod, setMcpMethod] = useState<'tools/list' | 'resources/list' | 'call_tutor' | 'call_course' | 'call_rag'>('tools/list');
  const [mcpRequestBody, setMcpRequestBody] = useState(JSON.stringify({
    jsonrpc: "2.0",
    id: 1,
    method: "tools/list",
    params: {}
  }, null, 2));
  const [mcpResponseBody, setMcpResponseBody] = useState<any>(null);
  const [isMcpLoading, setIsMcpLoading] = useState(false);
  const [mcpLatency, setMcpLatency] = useState<number | null>(null);

  // REST API Tester State
  const [selectedEndpoint, setSelectedEndpoint] = useState<'course_gen' | 'tutor' | 'tts' | 'quiz_eval' | 'rag_index'>('course_gen');
  const [selectedLanguage, setSelectedLanguage] = useState<'curl' | 'javascript' | 'python' | 'go' | 'rust'>('javascript');
  const [requestTopic, setRequestTopic] = useState('Autonomous Multi-Agent Swarms');
  const [isLoading, setIsLoading] = useState(false);
  const [responsePayload, setResponsePayload] = useState<any>(null);
  const [executionTimeMs, setExecutionTimeMs] = useState<number | null>(null);

  // CLI Engine State
  const [cliCommand, setCliCommand] = useState('zalamati init my-course --template cs-master');
  const [cliOutput, setCliOutput] = useState<string[]>([]);
  const [isCliRunning, setIsCliRunning] = useState(false);

  // Copy state helpers
  const [copiedText, setCopiedText] = useState<string | null>(null);

  // Auto load MCP telemetry
  React.useEffect(() => {
    if (activeDevTab === 'mcp') {
      fetchMcpTelemetry();
    }
  }, [activeDevTab]);

  const fetchMcpTelemetry = async () => {
    try {
      const res = await fetch('/api/mcp/status');
      if (res.ok) {
        const data = await res.json();
        setMcpTelemetry(data);
      }
    } catch (e) {
      console.warn('Failed to load MCP telemetry:', e);
    }
  };

  const handleMcpMethodChange = (method: typeof mcpMethod) => {
    setMcpMethod(method);
    let body = {};
    if (method === 'tools/list') {
      body = {
        jsonrpc: "2.0",
        id: 1,
        method: "tools/list",
        params: {}
      };
    } else if (method === 'resources/list') {
      body = {
        jsonrpc: "2.0",
        id: 2,
        method: "resources/list",
        params: {}
      };
    } else if (method === 'call_tutor') {
      body = {
        jsonrpc: "2.0",
        id: 3,
        method: "tools/call",
        params: {
          name: "ask_socratic_tutor",
          arguments: {
            prompt: "What is the relation between adaptive learning loops and retention?",
            thinkingMode: true
          }
        }
      };
    } else if (method === 'call_course') {
      body = {
        jsonrpc: "2.0",
        id: 4,
        method: "tools/call",
        params: {
          name: "generate_course_schema",
          arguments: {
            topic: "Reinforcement Learning from Human Feedback",
            level: "Advanced"
          }
        }
      };
    } else if (method === 'call_rag') {
      body = {
        jsonrpc: "2.0",
        id: 5,
        method: "tools/call",
        params: {
          name: "search_vector_rag",
          arguments: {
            query: "Neural networks"
          }
        }
      };
    }
    setMcpRequestBody(JSON.stringify(body, null, 2));
  };

  const executeMcpCall = async () => {
    setIsMcpLoading(true);
    setMcpResponseBody(null);
    const start = performance.now();
    try {
      let parsed;
      try {
        parsed = JSON.parse(mcpRequestBody);
      } catch (err) {
        throw new Error('Invalid JSON-RPC request payload. Please verify syntax.');
      }

      const res = await fetch('/api/mcp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parsed)
      });
      const data = await res.json();
      setMcpResponseBody(data);
      fetchMcpTelemetry();
    } catch (err: any) {
      setMcpResponseBody({
        jsonrpc: "2.0",
        id: null,
        error: { code: -32603, message: err.message || 'Execution Error' }
      });
    } finally {
      const end = performance.now();
      setMcpLatency(Math.round(end - start));
      setIsMcpLoading(false);
    }
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const generateNewKey = () => {
    const hex = Array.from({ length: 24 }, () => Math.floor(Math.random() * 16).toString(16)).join('');
    setApiKey(`zal_dev_sk_${hex}`);
  };

  const executeLiveApiCall = async () => {
    setIsLoading(true);
    setResponsePayload(null);
    const start = performance.now();

    try {
      if (selectedEndpoint === 'course_gen') {
        const course = await ApiService.generateCourse({
          topic: requestTopic,
          category: 'Computer Science',
          level: 'Advanced',
          moduleCount: 3
        });
        setResponsePayload(course);
      } else if (selectedEndpoint === 'tutor') {
        const res = await ApiService.askTutor({
          prompt: `Explain ${requestTopic} in simple terms`,
          thinkingMode: true
        });
        setResponsePayload(res);
      } else if (selectedEndpoint === 'tts') {
        const audio = await ApiService.generateTTSAudio(`Now playing demonstration audio for ${requestTopic}`);
        setResponsePayload({ status: 'success', audioUriPresent: !!audio, sampleRate: '24kHz', codec: 'mp3' });
      } else if (selectedEndpoint === 'quiz_eval') {
        const evalRes = await ApiService.evaluateQuizResponse({
          question: `What is the core principle of ${requestTopic}?`,
          studentAnswer: 'Adaptive feedback and continuous learning loops.',
          correctAnswer: 'Adaptive feedback and continuous learning loops.',
          explanation: 'Adaptive feedback provides the highest mastery retention.',
          currentAdaptiveLevel: 'standard'
        });
        setResponsePayload(evalRes);
      } else {
        if (ragAction === 'index') {
          const res = await fetch('/api/gemini/rag-index', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              action: 'index',
              title: ragTitle,
              content: ragContent,
              topic: requestTopic
            })
          });
          const data = await res.json();
          setResponsePayload(data);
        } else {
          const res = await fetch('/api/gemini/rag-index', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: requestTopic })
          });
          const data = await res.json();
          setResponsePayload(data);
        }
      }
    } catch (err: any) {
      setResponsePayload({ error: err.message || 'API Execution Error' });
    } finally {
      const end = performance.now();
      setExecutionTimeMs(Math.round(end - start));
      setIsLoading(false);
    }
  };

  const handleRunCli = () => {
    setIsCliRunning(true);
    setCliOutput(['$ ' + cliCommand]);
    setTimeout(() => {
      if (cliCommand.includes('init')) {
        setCliOutput([
          '$ ' + cliCommand,
          '✔ Creating project structure in ./my-ai-course...',
          '✔ Fetching latest Zalamati course templates from registry...',
          '✔ Installing dependencies (@zalamati/sdk v2.4.0)...',
          '✔ Setting up local Gemini & Firebase configurations...',
          '✨ Project initialized successfully! Run "cd my-ai-course && zalamati dev" to launch.'
        ]);
      } else if (cliCommand.includes('deploy')) {
        setCliOutput([
          '$ ' + cliCommand,
          '✔ Validating OpenAPI schema & route handlers...',
          '✔ Bundling edge functions with esbuild...',
          '✔ Deploying to Zalamati Serverless Cluster (Frankfurt)...',
          '🚀 Deployed! Production URL: https://api.zalamati.org/v1/deploy/my-course'
        ]);
      } else if (cliCommand.includes('mcp')) {
        setCliOutput([
          '$ ' + cliCommand,
          '✔ Initializing MCP Server transport over stdio...',
          '✔ Registered 5 tools: [generate_course_schema, ask_socratic_tutor, search_vector_rag, synthesize_tts, evaluate_quiz_mastery]',
          '✔ Listening for JSON-RPC 2.0 messages from active host clients...'
        ]);
      } else {
        setCliOutput([
          '$ ' + cliCommand,
          '✔ Command executed successfully.',
          'Result: OK (Exit code 0)'
        ]);
      }
      setIsCliRunning(false);
    }, 600);
  };

  const getCodeSnippet = () => {
    const epUrls = {
      course_gen: '/api/v1/generate-course',
      tutor: '/api/v1/tutor',
      tts: '/api/v1/tts',
      quiz_eval: '/api/v1/quiz-eval',
      rag_index: '/api/gemini/rag-index'
    };

    const url = `https://api.zalamati.org/v1${epUrls[selectedEndpoint] || '/api/gemini/rag-index'}`;

    if (selectedLanguage === 'curl') {
      if (selectedEndpoint === 'course_gen') {
        return `curl -X POST ${url} \\
  -H "Authorization: Bearer ${apiKey}" \\
  -H "Content-Type: application/json" \\
  -d '{
    "topic": "${requestTopic}",
    "category": "Computer Science",
    "level": "Advanced"
  }'`;
      } else if (selectedEndpoint === 'tutor') {
        return `curl -X POST ${url} \\
  -H "Authorization: Bearer ${apiKey}" \\
  -H "Content-Type: application/json" \\
  -d '{
    "prompt": "Explain ${requestTopic} in simple terms",
    "thinkingMode": true
  }'`;
      } else if (selectedEndpoint === 'tts') {
        return `curl -X POST ${url} \\
  -H "Authorization: Bearer ${apiKey}" \\
  -H "Content-Type: application/json" \\
  -d '{
    "text": "Now playing demonstration audio for ${requestTopic}"
  }'`;
      } else if (selectedEndpoint === 'quiz_eval') {
        return `curl -X POST ${url} \\
  -H "Authorization: Bearer ${apiKey}" \\
  -H "Content-Type: application/json" \\
  -d '{
    "question": "What is the core principle of ${requestTopic}?",
    "studentAnswer": "Adaptive learning loops.",
    "correctAnswer": "Adaptive learning loops.",
    "currentAdaptiveLevel": "standard"
  }'`;
      } else {
        return `curl -X POST ${url} \\
  -H "Authorization: Bearer ${apiKey}" \\
  -H "Content-Type: application/json" \\
  -d '{
    "action": "${ragAction}",
    ${ragAction === 'index' ? `"title": "${ragTitle}",\n    "content": "${ragContent.substring(0, 40)}...",` : `"query": "${requestTopic}"`},
    "topic": "Computer Science"
  }'`;
      }
    }

    if (selectedLanguage === 'javascript') {
      if (selectedEndpoint === 'course_gen') {
        return `import { ZalamatiClient } from '@zalamati/sdk';

const client = new ZalamatiClient({ apiKey: '${apiKey}' });

async function main() {
  const course = await client.courses.generate({
    topic: '${requestTopic}',
    category: 'Computer Science',
    level: 'Advanced'
  });
  console.log('Generated Course:', course.title);
}

main();`;
      } else if (selectedEndpoint === 'tutor') {
        return `import { ZalamatiClient } from '@zalamati/sdk';

const client = new ZalamatiClient({ apiKey: '${apiKey}' });

async function main() {
  const response = await client.tutor.ask({
    prompt: 'Explain ${requestTopic}',
    thinkingMode: true
  });
  console.log('Tutor Response:', response.reply);
}

main();`;
      } else if (selectedEndpoint === 'tts') {
        return `import { ZalamatiClient } from '@zalamati/sdk';

const client = new ZalamatiClient({ apiKey: '${apiKey}' });

async function main() {
  const audioData = await client.tts.generate({
    text: 'Now playing demonstration audio for ${requestTopic}'
  });
  console.log('Audio Data URI:', audioData.audioDataUri);
}

main();`;
      } else if (selectedEndpoint === 'quiz_eval') {
        return `import { ZalamatiClient } from '@zalamati/sdk';

const client = new ZalamatiClient({ apiKey: '${apiKey}' });

async function main() {
  const evaluation = await client.quizzes.evaluate({
    question: 'What is the core principle of ${requestTopic}?',
    studentAnswer: 'Adaptive feedback.',
    correctAnswer: 'Adaptive feedback.'
  });
  console.log('Correct:', evaluation.isCorrect);
}

main();`;
      } else {
        return `import { ZalamatiClient } from '@zalamati/sdk';

const client = new ZalamatiClient({ apiKey: '${apiKey}' });

async function main() {
  const results = await client.rag.${ragAction === 'index' ? 'indexDocument' : 'search'}({
    ${ragAction === 'index' ? `title: '${ragTitle}',\n    content: '${ragContent.substring(0, 45)}...',` : `query: '${requestTopic}'`},
    topic: 'Computer Science'
  });
  console.log('RAG Response:', results);
}

main();`;
      }
    }

    if (selectedLanguage === 'python') {
      if (selectedEndpoint === 'course_gen') {
        return `from zalamati import ZalamatiClient

client = ZalamatiClient(api_key="${apiKey}")

response = client.courses.generate(
    topic="${requestTopic}",
    category="Computer Science",
    level="Advanced"
)
print(f"Course: {response.title}")`;
      } else if (selectedEndpoint === 'tutor') {
        return `from zalamati import ZalamatiClient

client = ZalamatiClient(api_key="${apiKey}")

response = client.tutor.ask(
    prompt="Explain ${requestTopic}",
    thinking_mode=True
)
print(f"Reply: {response.reply}")`;
      } else if (selectedEndpoint === 'tts') {
        return `from zalamati import ZalamatiClient

client = ZalamatiClient(api_key="${apiKey}")

audio = client.tts.generate(
    text="Now playing demonstration audio for ${requestTopic}"
)
print(f"Audio URI: {audio.audio_data_uri}")`;
      } else if (selectedEndpoint === 'quiz_eval') {
        return `from zalamati import ZalamatiClient

client = ZalamatiClient(api_key="${apiKey}")

result = client.quizzes.evaluate(
    question="What is the core principle of ${requestTopic}?",
    student_answer="Adaptive learning",
    correct_answer="Adaptive learning"
)
print(f"Is Correct: {result.is_correct}")`;
      } else {
        return `from zalamati import ZalamatiClient

client = ZalamatiClient(api_key="${apiKey}")

results = client.rag.${ragAction === 'index' ? 'index_document' : 'search'}(
    ${ragAction === 'index' ? `title="${ragTitle}",\n    content="${ragContent.substring(0, 45)}...",` : `query="${requestTopic}"`},
    topic="Computer Science"
)
print(results)`;
      }
    }

    if (selectedLanguage === 'go') {
      return `package main

import (
	"fmt"
	"github.com/zalamati/zalamati-go"
)

func main() {
	client := zalamati.NewClient("${apiKey}")
	res, err := client.${selectedEndpoint === 'course_gen' ? 'GenerateCourse' : selectedEndpoint === 'tutor' ? 'AskTutor' : selectedEndpoint === 'tts' ? 'GenerateTTS' : selectedEndpoint === 'quiz_eval' ? 'EvaluateQuiz' : 'SearchRAG'}("${requestTopic}")
	if err != nil {
		panic(err)
	}
	fmt.Printf("API Response: %+v\\n", res)
}`;
    }

    return `use zalamati_sdk::ZalamatiClient;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = ZalamatiClient::new("${apiKey}");
    let response = client.${selectedEndpoint === 'course_gen' ? 'generate_course' : selectedEndpoint === 'tutor' ? 'ask_tutor' : selectedEndpoint === 'tts' ? 'generate_tts' : selectedEndpoint === 'quiz_eval' ? 'evaluate_quiz' : 'search_rag'}("${requestTopic}").await?;
    println!("Response received successfully!");
    Ok(())
}`;
  };

  return (
    <div className="space-y-8 animate-fade-in pb-16">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0a1822] via-[#0e212d] to-[#071118] border border-[#1d3d4c] p-8 md:p-10 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold">
            <Code2 className="w-3.5 h-3.5" />
            <span>Developer & Documentation Engine</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Developer Documentation & Integration Hub
          </h1>
          <p className="text-sm text-[#88acbd] leading-relaxed">
            Full-stack CLI tool, REST APIs, Model Context Protocol (MCP), SDK packages, GitHub Actions, and HuggingFace Hub integrations.
          </p>
        </div>

        {/* Top Developer Navigation Tabs */}
        <div className="flex flex-wrap gap-2 pt-6 border-t border-[#183646] mt-6">
          {[
            { id: 'api', label: 'REST API & Keys', icon: Key },
            { id: 'cli', label: 'CLI Engine & Terminal', icon: Terminal },
            { id: 'mcp', label: 'MCP Protocol Server', icon: Server },
            { id: 'sdks', label: 'SDKs & Libraries', icon: Package },
            { id: 'integrations', label: 'GitHub & HuggingFace', icon: Github },
            { id: 'install', label: 'Installation Guides', icon: Wrench },
          ].map((tab) => {
            const IconComp = tab.icon;
            const active = activeDevTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveDevTab(tab.id as DevTab)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all ${
                  active
                    ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20 scale-[1.02]'
                    : 'bg-[#08151c] text-[#7195a8] hover:text-white hover:bg-[#112633] border border-[#18374a]'
                }`}
              >
                <IconComp className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* TAB 1: REST API & KEYS */}
      {activeDevTab === 'api' && (
        <div className="space-y-8">
          {/* API Key Generator Card */}
          <div className="p-6 rounded-2xl bg-[#10222c] border border-[#1c3c4b] space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1b3846] pb-4">
              <div>
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <Key className="w-5 h-5 text-amber-400" />
                  API Key & Security Credentials
                </h2>
                <p className="text-xs text-[#7f9fbf]">Free unlimited developer keys for non-profit education and AI research.</p>
              </div>

              <button
                onClick={generateNewKey}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#163847] hover:bg-[#1d4557] text-cyan-300 text-xs font-semibold border border-cyan-500/30 transition-all shadow-md"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Generate New API Key</span>
              </button>
            </div>

            {/* Key Display Bar */}
            <div className="flex items-center gap-2 p-3 rounded-xl bg-[#08131a] border border-[#1d3c4a]">
              <Lock className="w-4 h-4 text-cyan-400 shrink-0" />
              <input
                type={showKey ? 'text' : 'password'}
                readOnly
                value={apiKey}
                className="flex-1 bg-transparent text-xs font-mono text-cyan-300 focus:outline-none"
              />
              <button
                onClick={() => setShowKey(!showKey)}
                className="p-1.5 rounded-lg text-[#618596] hover:text-white transition-colors"
                title={showKey ? 'Hide Key' : 'Show Key'}
              >
                {showKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
              <button
                onClick={() => copyToClipboard(apiKey, 'key')}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#112a36] hover:bg-[#183948] text-xs font-semibold text-white border border-[#204456] transition-all"
              >
                {copiedText === 'key' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-cyan-400" />}
                <span>{copiedText === 'key' ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Scopes Selection */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-[#83a5b5]">Granted Scopes & Capabilities:</label>
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'courses:generate', label: 'Course Architect API' },
                  { id: 'tutor:ask', label: 'Socratic AI Tutor API' },
                  { id: 'rag:search', label: 'Deep Crawl RAG Index' },
                  { id: 'tts:generate', label: 'Speech Audio Generation' },
                  { id: 'certs:issue', label: 'Certificate Issuer' },
                  { id: 'mcp:execute', label: 'MCP Server Execution' }
                ].map((scope) => {
                  const active = keyScopes.includes(scope.id);
                  return (
                    <button
                      key={scope.id}
                      onClick={() => {
                        setKeyScopes(prev =>
                          prev.includes(scope.id)
                            ? prev.filter(s => s !== scope.id)
                            : [...prev, scope.id]
                        );
                      }}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                        active
                          ? 'bg-[#153444] text-cyan-300 border-cyan-500/40'
                          : 'bg-[#0b171f] text-[#5d8090] border-[#183341]'
                      }`}
                    >
                      <CheckCircle2 className={`w-3.5 h-3.5 ${active ? 'text-teal-400' : 'text-slate-600'}`} />
                      <span>{scope.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Interactive REST Endpoint Tester */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#10222c] border border-[#1c3c4b] space-y-5">
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <Sliders className="w-4 h-4 text-cyan-400" />
                Endpoint Tester
              </h2>

              <div className="space-y-3">
                <label className="text-xs font-semibold text-[#83a5b5]">Select API Endpoint:</label>
                <div className="space-y-2">
                  {[
                    { id: 'course_gen', label: 'POST /api/v1/generate-course', desc: 'Course Architect Generator' },
                    { id: 'tutor', label: 'POST /api/v1/tutor', desc: 'Socratic Tutor Query' },
                    { id: 'tts', label: 'POST /api/v1/tts', desc: 'Speech Synthesis Engine' },
                    { id: 'quiz_eval', label: 'POST /api/v1/quiz-eval', desc: 'Adaptive Quiz Evaluator' },
                    { id: 'rag_index', label: 'POST /api/v1/rag-index', desc: 'Deep Crawl RAG Search' }
                  ].map((ep) => (
                    <button
                      key={ep.id}
                      onClick={() => setSelectedEndpoint(ep.id as any)}
                      className={`w-full text-left p-3 rounded-xl border transition-all ${
                        selectedEndpoint === ep.id
                          ? 'bg-[#153545] border-cyan-500/50 text-white shadow-md'
                          : 'bg-[#0d1a21] border-[#1a3847] text-[#7093a3] hover:text-white'
                      }`}
                    >
                      <div className="font-mono text-xs font-bold text-cyan-300">{ep.label}</div>
                      <div className="text-[11px] text-[#5e8191] mt-0.5">{ep.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {selectedEndpoint === 'rag_index' && (
                <div className="space-y-3 p-3.5 rounded-xl bg-[#09151e] border border-[#1b3d4f] space-y-3 animate-fade-in">
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setRagAction('search')}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        ragAction === 'search'
                          ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                          : 'bg-[#0d1c25] text-slate-400 hover:text-white border border-[#142e3d]'
                      }`}
                    >
                      Search RAG Memory
                    </button>
                    <button
                      type="button"
                      onClick={() => setRagAction('index')}
                      className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        ragAction === 'index'
                          ? 'bg-purple-500 text-white shadow-md shadow-purple-500/20'
                          : 'bg-[#0d1c25] text-slate-400 hover:text-white border border-[#142e3d]'
                      }`}
                    >
                      Index Document
                    </button>
                  </div>

                  {ragAction === 'index' ? (
                    <div className="space-y-3 pt-1">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Document Title</label>
                        <input
                          type="text"
                          value={ragTitle}
                          onChange={(e) => setRagTitle(e.target.value)}
                          className="w-full px-3 py-1.5 rounded-lg bg-[#04090d] border border-[#1a3d4f] text-xs text-white focus:outline-none focus:border-cyan-400"
                          placeholder="e.g. Memory Alignment Theory"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Document Content (Markdown)</label>
                        <textarea
                          value={ragContent}
                          onChange={(e) => setRagContent(e.target.value)}
                          rows={3}
                          className="w-full px-3 py-1.5 rounded-lg bg-[#04090d] border border-[#1a3d4f] text-xs text-white focus:outline-none focus:border-cyan-400 resize-none"
                          placeholder="e.g. Cognitive indexing relies on high-dimensional semantic search vectors..."
                        />
                      </div>
                    </div>
                  ) : null}
                </div>
              )}

              <div className="space-y-2">
                <label className="text-xs font-semibold text-[#83a5b5]">
                  {selectedEndpoint === 'rag_index' && ragAction === 'index' ? 'Category / Subject' : 'Target Subject / Topic:'}
                </label>
                <input
                  type="text"
                  value={requestTopic}
                  onChange={(e) => setRequestTopic(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#08131a] border border-[#1c3d4c] text-xs text-white focus:outline-none focus:border-cyan-400"
                  placeholder="e.g. Quantum Computing, Machine Learning"
                />
              </div>

              <button
                onClick={executeLiveApiCall}
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-500 hover:from-cyan-500 hover:to-teal-400 text-white font-semibold text-xs shadow-lg shadow-cyan-900/30 transition-all disabled:opacity-50"
              >
                {isLoading ? (
                  <RefreshCw className="w-4 h-4 animate-spin text-white" />
                ) : (
                  <Play className="w-4 h-4 fill-white text-white" />
                )}
                <span>{isLoading ? 'Executing Request...' : 'Send Live Request'}</span>
              </button>
            </div>

            <div className="lg:col-span-7 space-y-6">
              {/* Code Snippet */}
              <div className="p-6 rounded-2xl bg-[#10222c] border border-[#1c3c4b] space-y-4">
                <div className="flex items-center justify-between border-b border-[#1b3846] pb-3">
                  <h2 className="text-sm font-bold text-white flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-teal-400" />
                    Code Generator
                  </h2>

                  <div className="flex items-center gap-1.5 bg-[#08131a] p-1 rounded-lg border border-[#1c3b49]">
                    {(['curl', 'javascript', 'python', 'go', 'rust'] as const).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => setSelectedLanguage(lang)}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all uppercase ${
                          selectedLanguage === lang
                            ? 'bg-[#183949] text-cyan-300 border border-cyan-500/30'
                            : 'text-[#5f8292] hover:text-white'
                        }`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="relative bg-[#071116] p-4 rounded-xl border border-[#1a3847] font-mono text-[11px] text-cyan-200 overflow-x-auto">
                  <pre>{getCodeSnippet()}</pre>
                  <button
                    onClick={() => copyToClipboard(getCodeSnippet(), 'snippet')}
                    className="absolute top-3 right-3 p-1.5 rounded-lg bg-[#10242f] hover:bg-[#183645] text-[#608394] hover:text-white transition-all border border-[#1c3c4b]"
                  >
                    {copiedText === 'snippet' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-cyan-400" />}
                  </button>
                </div>
              </div>

              {/* Response Payload */}
              <div className="p-6 rounded-2xl bg-[#10222c] border border-[#1c3c4b] space-y-3">
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-bold text-white flex items-center gap-2">
                    <Zap className="w-4 h-4 text-amber-400" />
                    Response Payload Output
                  </h2>
                  {executionTimeMs !== null && (
                    <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      Latency: {executionTimeMs} ms | HTTP 200 OK
                    </span>
                  )}
                </div>

                <div className="bg-[#071116] p-4 rounded-xl border border-[#1a3847] font-mono text-[11px] text-emerald-300 min-h-[160px] max-h-[300px] overflow-y-auto">
                  {responsePayload ? (
                    <pre>{JSON.stringify(responsePayload, null, 2)}</pre>
                  ) : (
                    <div className="text-slate-500 italic text-center pt-10">
                      Click "Send Live Request" above to trigger an active API call...
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: CLI ENGINE & TERMINAL */}
      {activeDevTab === 'cli' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-[#10222c] border border-[#1c3c4b] space-y-5">
            <div className="flex items-center justify-between border-b border-[#183646] pb-4">
              <div className="flex items-center gap-3">
                <Terminal className="w-6 h-6 text-cyan-400" />
                <div>
                  <h2 className="text-lg font-bold text-white">Zalamati Command Line Interface (CLI)</h2>
                  <p className="text-xs text-[#7195a8]">Deploy study pipelines, sync datasets, and execute MCP servers from terminal</p>
                </div>
              </div>
              <div className="font-mono text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
                v2.4.0 Stable
              </div>
            </div>

            {/* Quick Install Commands */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-[#08131a] border border-[#183648] space-y-2">
                <span className="text-xs font-bold text-cyan-300">NPM Global Install:</span>
                <div className="flex items-center justify-between bg-[#040b10] p-3 rounded-xl border border-[#122836] font-mono text-xs text-emerald-400">
                  <span>npm install -g @zalamati/cli</span>
                  <button onClick={() => copyToClipboard('npm install -g @zalamati/cli', 'cli_npm')}>
                    {copiedText === 'cli_npm' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-[#7195a8]" />}
                  </button>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#08131a] border border-[#183648] space-y-2">
                <span className="text-xs font-bold text-purple-300">PyPI Pip Install:</span>
                <div className="flex items-center justify-between bg-[#040b10] p-3 rounded-xl border border-[#122836] font-mono text-xs text-purple-300">
                  <span>pip install zalamati-cli</span>
                  <button onClick={() => copyToClipboard('pip install zalamati-cli', 'cli_pip')}>
                    {copiedText === 'cli_pip' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-[#7195a8]" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Interactive Terminal Sandbox */}
            <div className="p-5 rounded-2xl bg-[#071117] border border-[#183648] space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  Interactive CLI Command Sandbox
                </span>
                <div className="flex gap-2">
                  {['zalamati init my-ai-course', 'zalamati deploy --env prod', 'zalamati mcp serve'].map((cmd) => (
                    <button
                      key={cmd}
                      onClick={() => setCliCommand(cmd)}
                      className="px-2.5 py-1 rounded-lg bg-[#112735] hover:bg-[#1a384a] text-[11px] font-mono text-cyan-300 border border-[#1c3e52]"
                    >
                      {cmd}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={cliCommand}
                  onChange={(e) => setCliCommand(e.target.value)}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-[#040a0e] border border-[#18384a] font-mono text-xs text-cyan-300 focus:outline-none focus:border-cyan-400"
                />
                <button
                  onClick={handleRunCli}
                  disabled={isCliRunning}
                  className="px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs hover:bg-cyan-400 transition-all flex items-center gap-2"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>Run Command</span>
                </button>
              </div>

              {/* Terminal Output */}
              <div className="p-4 rounded-xl bg-[#03070a] border border-[#102430] font-mono text-xs text-emerald-400 space-y-1.5 min-h-[140px]">
                {cliOutput.map((line, idx) => (
                  <div key={idx} className={line.startsWith('$') ? 'text-cyan-300 font-bold' : ''}>
                    {line}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: MCP PROTOCOL SERVER */}
      {activeDevTab === 'mcp' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-[#10222c] border border-[#1c3c4b] space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#183646] pb-4">
              <div className="flex items-center gap-3">
                <Server className="w-6 h-6 text-purple-400" />
                <div>
                  <h2 className="text-lg font-bold text-white">Model Context Protocol (MCP) Server Integration</h2>
                  <p className="text-xs text-[#7195a8]">
                    Connect your secure AI agents and local IDE contexts directly to Zalamati's live tools.
                  </p>
                </div>
              </div>

              {/* Live telemetry badge */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0a1821] border border-[#1b3b4d] self-start sm:self-auto">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[11px] font-bold text-emerald-400 font-mono">STATUS: {mcpTelemetry.status}</span>
                <span className="text-[10px] text-slate-500 font-mono">v{mcpTelemetry.mcpVersion}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left column: Server Telemetry and Settings */}
              <div className="lg:col-span-5 space-y-5">
                <div className="p-4 rounded-xl bg-[#09151e] border border-[#163445] space-y-4">
                  <h3 className="text-xs font-bold text-[#83a5b5] uppercase tracking-wider">Live Server Telemetry</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-[#050d12] border border-[#112a38]">
                      <div className="text-[10px] text-slate-400 font-semibold uppercase">Active Connections</div>
                      <div className="text-lg font-bold text-cyan-400 font-mono mt-0.5">{mcpTelemetry.activeConnections}</div>
                    </div>
                    <div className="p-3 rounded-lg bg-[#050d12] border border-[#112a38]">
                      <div className="text-[10px] text-slate-400 font-semibold uppercase">Indexed Documents</div>
                      <div className="text-lg font-bold text-purple-400 font-mono mt-0.5">{mcpTelemetry.indexedDocsCount}</div>
                    </div>
                  </div>

                  <div className="text-xs space-y-1.5 text-slate-300">
                    <div className="flex justify-between border-b border-[#0f2430] pb-1.5">
                      <span>Transport Protocol:</span>
                      <span className="font-mono text-cyan-300 font-semibold">{mcpTelemetry.transport}</span>
                    </div>
                    <div className="flex justify-between pt-1">
                      <span>Server Local Port:</span>
                      <span className="font-mono text-cyan-300 font-semibold">3000 (HTTPS Proxy Gateway)</span>
                    </div>
                  </div>
                </div>

                {/* mcp.json Configuration */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-purple-300 font-mono">mcp_config.json / mcp.json:</label>
                    <button
                      onClick={() => copyToClipboard(`{
  "mcpServers": {
    "zalamati-engine-mcp": {
      "command": "npx",
      "args": ["-y", "@zalamati/mcp-server"],
      "env": {
        "ZALAMATI_API_KEY": "${apiKey}"
      }
    }
  }
}`, 'mcp_json')}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#112938] text-[11px] font-bold text-cyan-300 hover:bg-[#193b50]"
                    >
                      {copiedText === 'mcp_json' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedText === 'mcp_json' ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#061117] border border-[#183646] font-mono text-xs text-purple-200 overflow-x-auto">
                    <pre className="text-[11px]">{`{
  "mcpServers": {
    "zalamati-engine-mcp": {
      "command": "npx",
      "args": ["-y", "@zalamati/mcp-server"],
      "env": {
        "ZALAMATI_API_KEY": "${apiKey}"
      }
    }
  }
}`}</pre>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xs font-bold text-[#83a5b5] uppercase tracking-wider">Registered Server Tools</h3>
                  <div className="space-y-2 max-h-[140px] overflow-y-auto pr-1">
                    {(mcpTelemetry.exposedTools || []).map((tName: string) => (
                      <div key={tName} className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-[#07131a] border border-[#132c3b] font-mono text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{tName}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right column: Interactive JSON-RPC tester */}
              <div className="lg:col-span-7 p-5 rounded-xl bg-[#09151e] border border-[#163445] space-y-4">
                <div className="flex items-center justify-between border-b border-[#122e3d] pb-3">
                  <h3 className="text-xs font-bold text-[#83a5b5] uppercase tracking-wider flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-purple-400" />
                    Interactive JSON-RPC Tester
                  </h3>
                  <button
                    onClick={fetchMcpTelemetry}
                    className="p-1 rounded bg-[#0f2838] hover:bg-[#1a3c50] text-slate-300"
                    title="Refresh server telemetry"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Method Toggles */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">JSON-RPC Call Mode</label>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      { id: 'tools/list', label: 'tools/list' },
                      { id: 'resources/list', label: 'resources/list' },
                      { id: 'call_tutor', label: 'Call: tutor' },
                      { id: 'call_course', label: 'Call: course' },
                      { id: 'call_rag', label: 'Call: RAG' }
                    ].map((m) => (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => handleMcpMethodChange(m.id as any)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                          mcpMethod === m.id
                            ? 'bg-purple-600 text-white shadow-md'
                            : 'bg-[#060e14] text-slate-400 hover:text-slate-200 border border-[#112735]'
                        }`}
                      >
                        {m.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Request Body */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">JSON-RPC Request Frame</label>
                      <button
                        onClick={() => copyToClipboard(mcpRequestBody, 'mcp_req')}
                        className="text-[10px] text-cyan-400 hover:underline animate-fade-in"
                      >
                        {copiedText === 'mcp_req' ? 'Copied' : 'Copy'}
                      </button>
                    </div>
                    <textarea
                      value={mcpRequestBody}
                      onChange={(e) => setMcpRequestBody(e.target.value)}
                      rows={9}
                      className="w-full p-2.5 rounded-lg bg-[#03080c] border border-[#122e3d] font-mono text-[11px] text-purple-300 focus:outline-none focus:border-purple-500 resize-none"
                    />
                  </div>

                  {/* Response Body */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">JSON-RPC Response Frame</label>
                      {mcpLatency && (
                        <span className="text-[10px] text-purple-400 font-mono">latency: {mcpLatency}ms</span>
                      )}
                    </div>
                    <div className="w-full h-[178px] p-2.5 rounded-lg bg-[#020508] border border-[#0e2430] font-mono text-[11px] text-cyan-400 overflow-y-auto overflow-x-hidden">
                      {isMcpLoading ? (
                        <div className="flex flex-col items-center justify-center h-full gap-2 text-slate-500">
                          <RefreshCw className="w-5 h-5 animate-spin text-purple-400" />
                          <span>Dispatching JSON-RPC Payload...</span>
                        </div>
                      ) : mcpResponseBody ? (
                        <pre className="whitespace-pre-wrap">{JSON.stringify(mcpResponseBody, null, 2)}</pre>
                      ) : (
                        <div className="flex items-center justify-center h-full text-slate-500 text-center px-4">
                          No JSON-RPC responses generated yet. Configure a method and tap "Transmit" to initiate execution.
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <button
                  onClick={executeMcpCall}
                  disabled={isMcpLoading}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-lg transition-all disabled:opacity-50"
                >
                  {isMcpLoading ? (
                    <RefreshCw className="w-4 h-4 animate-spin text-white" />
                  ) : (
                    <Zap className="w-4 h-4 fill-white text-white animate-pulse" />
                  )}
                  <span>{isMcpLoading ? 'Transmitting JSON-RPC Request...' : 'Transmit JSON-RPC Packet'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: SDKs & LIBRARIES */}
      {activeDevTab === 'sdks' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-[#10222c] border border-[#1c3c4b] space-y-6">
            <div className="flex items-center gap-3 border-b border-[#183646] pb-4">
              <Package className="w-6 h-6 text-emerald-400" />
              <div>
                <h2 className="text-lg font-bold text-white">Official Language SDKs & Libraries</h2>
                <p className="text-xs text-[#7195a8]">Type-safe client libraries for TypeScript, Python, Go, and Rust</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Node.js */}
              <div className="p-5 rounded-2xl bg-[#08151c] border border-[#18374a] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-sm">TypeScript / Node.js</span>
                  <span className="text-[10px] font-mono text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">@zalamati/sdk</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#040a0e] font-mono text-xs text-emerald-400">
                  npm install @zalamati/sdk
                </div>
              </div>

              {/* Python */}
              <div className="p-5 rounded-2xl bg-[#08151c] border border-[#18374a] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-sm">Python 3.9+</span>
                  <span className="text-[10px] font-mono text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">zalamati</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#040a0e] font-mono text-xs text-purple-300">
                  pip install zalamati
                </div>
              </div>

              {/* Go */}
              <div className="p-5 rounded-2xl bg-[#08151c] border border-[#18374a] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-sm">Go (Golang)</span>
                  <span className="text-[10px] font-mono text-teal-300 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">zalamati-go</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#040a0e] font-mono text-xs text-teal-300">
                  go get github.com/zalamati/zalamati-go
                </div>
              </div>

              {/* Rust */}
              <div className="p-5 rounded-2xl bg-[#08151c] border border-[#18374a] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-sm">Rust Crates</span>
                  <span className="text-[10px] font-mono text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">zalamati-sdk</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#040a0e] font-mono text-xs text-amber-300">
                  cargo add zalamati-sdk
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: GITHUB & HUGGINGFACE INTEGRATIONS */}
      {activeDevTab === 'integrations' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-[#10222c] border border-[#1c3c4b] space-y-6">
            <div className="flex items-center gap-3 border-b border-[#183646] pb-4">
              <Github className="w-6 h-6 text-white" />
              <div>
                <h2 className="text-lg font-bold text-white">GitHub Actions & HuggingFace Hub Integrations</h2>
                <p className="text-xs text-[#7195a8]">Automated course sync via GitHub CI/CD & fine-tuned model weights from HuggingFace</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* GitHub CI/CD */}
              <div className="p-5 rounded-2xl bg-[#08151c] border border-[#18374a] space-y-4">
                <div className="flex items-center gap-2">
                  <FolderGit2 className="w-5 h-5 text-cyan-400" />
                  <h3 className="font-bold text-white text-sm">GitHub Action Workflow</h3>
                </div>
                <p className="text-xs text-[#7195a8]">Automatically validate and deploy course syllabi on git push.</p>
                <div className="p-3 rounded-xl bg-[#040a0e] border border-[#112634] font-mono text-[11px] text-cyan-200">
                  <pre>{`name: Zalamati Deploy
on: [push]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: zalamati/action-deploy@v1
        with:
          api-key: \${{ secrets.ZALAMATI_KEY }}`}</pre>
                </div>
              </div>

              {/* HuggingFace Hub */}
              <div className="p-5 rounded-2xl bg-[#08151c] border border-[#18374a] space-y-4">
                <div className="flex items-center gap-2">
                  <Box className="w-5 h-5 text-amber-400" />
                  <h3 className="font-bold text-white text-sm">HuggingFace Model Hub</h3>
                </div>
                <p className="text-xs text-[#7195a8]">Load fine-tuned educational embeddings directly from HuggingFace dataset repos.</p>
                <div className="p-3 rounded-xl bg-[#040a0e] border border-[#112634] font-mono text-[11px] text-amber-300">
                  <pre>{`from transformers import AutoModel

model = AutoModel.from_pretrained(
    "zalamati/scholarly-gemini-v1",
    use_auth_token=True
)`}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 6: INSTALLATION GUIDES */}
      {activeDevTab === 'install' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-[#10222c] border border-[#1c3c4b] space-y-6">
            <div className="flex items-center gap-3 border-b border-[#183646] pb-4">
              <Wrench className="w-6 h-6 text-teal-400" />
              <div>
                <h2 className="text-lg font-bold text-white">Full Stack Installation & Deployment Guide</h2>
                <p className="text-xs text-[#7195a8]">Step-by-step setup instructions for self-hosted container environments</p>
              </div>
            </div>

            <div className="space-y-4 text-xs text-[#88acbd]">
              <div className="p-4 rounded-2xl bg-[#08151c] border border-[#18374a] space-y-2">
                <h3 className="font-bold text-cyan-300 text-sm">Step 1: Clone & Configure Environment</h3>
                <div className="p-3 rounded-xl bg-[#040a0e] font-mono text-emerald-400">
                  git clone https://github.com/zalamati/zalamati-platform.git<br />
                  cd zalamati-platform && cp .env.example .env
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#08151c] border border-[#18374a] space-y-2">
                <h3 className="font-bold text-purple-300 text-sm">Step 2: Run via Docker Compose</h3>
                <div className="p-3 rounded-xl bg-[#040a0e] font-mono text-purple-300">
                  docker-compose up -d --build
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#08151c] border border-[#18374a] space-y-2">
                <h3 className="font-bold text-amber-300 text-sm">Step 3: Verify Health Check</h3>
                <div className="p-3 rounded-xl bg-[#040a0e] font-mono text-amber-300">
                  curl http://localhost:3000/api/health
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
