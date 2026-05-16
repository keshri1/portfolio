export function HydrationPost() {
  return (
    <div className="prose-custom">
      <style>{`
        .prose-custom { color: var(--ink-muted); line-height: 1.8; font-size: 15px; }
        .prose-custom h2 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.75rem;
          font-weight: 600;
          color: var(--ink);
          margin: 2.5rem 0 1rem;
          letter-spacing: -0.02em;
          line-height: 1.25;
        }
        .prose-custom h3 {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--ink);
          margin: 2rem 0 0.75rem;
        }
        .prose-custom p { margin-bottom: 1.25rem; }
        .prose-custom ul, .prose-custom ol {
          padding-left: 1.5rem;
          margin-bottom: 1.25rem;
        }
        .prose-custom li { margin-bottom: 0.4rem; }
        .prose-custom code {
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          background: var(--surface-2, #1A1A26);
          padding: 2px 6px;
          border-radius: 4px;
          color: var(--ink);
        }
        .prose-custom pre {
          background: var(--surface-2, #1A1A26);
          border: 0.5px solid var(--border);
          border-radius: 10px;
          padding: 1.25rem 1.5rem;
          overflow-x: auto;
          margin: 1.5rem 0;
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          line-height: 1.7;
          color: var(--ink);
        }
        .prose-custom pre code {
          background: none;
          padding: 0;
          font-size: inherit;
        }
        .prose-custom .callout {
          border-left: 3px solid var(--accent, #C8873A);
          padding: 0.75rem 1.25rem;
          background: rgba(200, 135, 58, 0.06);
          border-radius: 0 8px 8px 0;
          margin: 1.5rem 0;
          color: var(--ink);
          font-size: 14px;
        }
        .prose-custom .flow-block {
          background: var(--surface-2, #1A1A26);
          border: 0.5px solid var(--border);
          border-radius: 10px;
          padding: 1.25rem 1.5rem;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          line-height: 1.9;
          margin: 1.5rem 0;
          color: var(--ink-muted);
        }
        .prose-custom .flow-block .label {
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--accent, #C8873A);
          margin-bottom: 0.5rem;
        }
        .prose-custom table {
          width: 100%;
          border-collapse: collapse;
          margin: 1.5rem 0;
          font-size: 13px;
        }
        .prose-custom th {
          text-align: left;
          padding: 8px 12px;
          border-bottom: 1px solid var(--border);
          color: var(--ink);
          font-weight: 600;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .prose-custom td {
          padding: 8px 12px;
          border-bottom: 0.5px solid var(--border);
          vertical-align: top;
        }
        .prose-custom strong { color: var(--ink); font-weight: 600; }
        .prose-custom hr {
          border: none;
          border-top: 0.5px solid var(--border);
          margin: 2.5rem 0;
        }
      `}</style>

      {/* ── Opening ── */}
      <p>
        If you've built with React and Next.js for any length of time, you've almost certainly
        encountered a cryptic warning: <em>"Hydration failed because the initial UI does not
        match what was rendered on the server."</em> Most engineers google it, apply a fix, and
        move on — without understanding what actually went wrong or why.
      </p>
      <p>
        That's a missed opportunity. Hydration is one of the most consequential concepts in
        modern frontend engineering. At scale, it directly determines how fast your pages become
        interactive, how much CPU you burn on the main thread, and whether your SEO-optimised
        server HTML actually matches what users see.
      </p>
      <p>
        This article covers how hydration works internally, why it fails, and — most
        importantly — how to measure and optimise it in production.
      </p>

      {/* ── What is hydration ── */}
      <h2>What is hydration?</h2>
      <p>
        Hydration is the process of attaching JavaScript event listeners and React state to
        HTML that was already rendered on the server. Think of it as the browser receiving a
        fully-painted car and then installing the engine — the car looks complete immediately,
        but it only starts moving once the engine is wired up.
      </p>

      <div className="callout">
        <strong>One-line definition:</strong> The server sends ready-made HTML. React
        "activates" it on the client — attaching events, restoring state, and making it
        interactive.
      </div>

      <p>
        Without hydration, a server-rendered page would display correctly but every button,
        form, and interactive element would be completely inert.
      </p>

      {/* ── Why it exists ── */}
      <h2>Why hydration exists — CSR vs SSR</h2>
      <p>
        To understand why hydration is necessary, you need to understand the problem it solves.
      </p>

      <h3>Client-Side Rendering (CSR)</h3>
      <p>
        In a traditional React SPA, the browser downloads a JavaScript bundle, React executes
        in the browser, generates HTML dynamically, and the UI finally appears. The downside:
        slow initial load, poor SEO, and a blank screen until JavaScript executes.
      </p>

      <h3>Server-Side Rendering (SSR)</h3>
      <p>
        With SSR, the server generates HTML first, the browser immediately displays content,
        then JavaScript downloads, and React attaches interactivity. That final attachment step
        is hydration.
      </p>

      {/* ── Step by step ── */}
      <h2>How hydration works — step by step</h2>
      <p>
        Here's what happens when a user visits a Next.js page, from request to fully
        interactive UI:
      </p>

      <div className="flow-block">
        <div className="label">Server</div>
        React component tree<br />
        &nbsp;&nbsp;↓<br />
        renderToString() → HTML string<br />
        &nbsp;&nbsp;↓<br />
        HTML + serialised React state sent to browser<br />
        <br />
        <div className="label" style={{ marginTop: "0.5rem" }}>Browser</div>
        HTML painted immediately (FCP)<br />
        &nbsp;&nbsp;↓<br />
        JavaScript bundle downloads<br />
        &nbsp;&nbsp;↓<br />
        React calls hydrateRoot()<br />
        &nbsp;&nbsp;↓<br />
        React builds virtual DOM from existing HTML<br />
        &nbsp;&nbsp;↓<br />
        React verifies server HTML matches client render<br />
        &nbsp;&nbsp;↓<br />
        Event listeners attached, hooks initialised (TTI)<br />
      </div>

      <p>
        The key detail: React does <strong>not</strong> recreate the DOM from scratch during
        hydration. It walks the existing server-rendered DOM and attaches behaviour to nodes
        it already finds there. This is why a mismatch between server and client output is a
        hard error — React has no way to reconcile two different trees.
      </p>

      {/* ── Code example ── */}
      <h2>A concrete example</h2>
      <pre><code>{`function ClickCounter() {
  const [count, setCount] = React.useState(0);

  return (
    <button onClick={() => setCount(c => c + 1)}>
      Clicks: {count}
    </button>
  );
}`}</code></pre>

      <p><strong>Server output:</strong></p>
      <pre><code>{`<button>Clicks: 0</button>`}</code></pre>

      <p>
        The browser receives this HTML and paints it instantly. The button is visible — but
        clicking does nothing yet. Then React downloads, calls <code>hydrateRoot()</code>,
        walks the DOM, finds the <code>{"<button>"}</code>, initialises the{" "}
        <code>useState(0)</code> hook, and attaches the <code>onClick</code> handler. Now
        the counter works.
      </p>

      {/* ── Why expensive ── */}
      <h2>Why hydration is expensive</h2>
      <p>
        Hydration is not free. Even though React isn't creating DOM nodes from scratch, it
        still has to:
      </p>
      <ul>
        <li>Parse and execute the full JavaScript bundle</li>
        <li>Build a complete virtual DOM in memory</li>
        <li>Walk the entire server-rendered DOM tree</li>
        <li>Verify every node matches the client render</li>
        <li>Attach event listeners across the entire component tree</li>
        <li>Execute all <code>useEffect</code> and <code>useLayoutEffect</code> hooks</li>
      </ul>
      <p>
        On a large application this can block the main thread for hundreds of milliseconds,
        producing the frustrating experience where a page <em>looks</em> loaded but buttons
        don't respond. This gap between First Contentful Paint (FCP) and Time to Interactive
        (TTI) is the real cost of hydration.
      </p>

      {/* ── Common errors ── */}
      <h2>Common hydration errors and their causes</h2>

      <h3>1. Browser-only APIs used during render</h3>
      <pre><code>{`// ❌ Bad — window doesn't exist on the server
const theme = window.localStorage.getItem('theme');

// ✅ Good — check inside useEffect (client-only)
const [theme, setTheme] = useState('dark');
useEffect(() => {
  setTheme(localStorage.getItem('theme') ?? 'dark');
}, []);`}</code></pre>

      <h3>2. Non-deterministic values</h3>
      <pre><code>{`// ❌ Bad — Math.random() returns different values on server vs client
<div id={Math.random()}>...</div>

// ✅ Good — use useId() from React 18
const id = useId();
<div id={id}>...</div>`}</code></pre>

      <h3>3. Conditional rendering on window check</h3>
      <pre><code>{`// ❌ Bad — server renders nothing, client renders component
{typeof window !== 'undefined' && <ClientOnlyChart />}

// ✅ Good — use dynamic import with ssr: false
const ClientOnlyChart = dynamic(() => import('./Chart'), {
  ssr: false,
});`}</code></pre>

      <h3>4. Dates and locale-sensitive output</h3>
      <pre><code>{`// ❌ Bad — server (UTC) and client (local timezone) produce different strings
<p>{new Date().toLocaleTimeString()}</p>

// ✅ Good — render dates only on the client
const [time, setTime] = useState('');
useEffect(() => {
  setTime(new Date().toLocaleTimeString());
}, []);`}</code></pre>

      {/* ── Debugging ── */}
      <h2>How to debug hydration problems</h2>

      <h3>1. React's error message is your first clue</h3>
      <p>
        React 18 logs detailed diffs in development mode — it highlights which node caused
        the mismatch and what both values were. Read it before reaching for DevTools.
      </p>

      <h3>2. Use <code>suppressHydrationWarning</code> surgically</h3>
      <pre><code>{`// Use only for intentionally dynamic content (e.g. timestamps)
<time suppressHydrationWarning>
  {new Date().toLocaleTimeString()}
</time>`}</code></pre>
      <p>
        This suppresses the warning for a single element. Never use it to silence a mismatch
        you haven't diagnosed — it masks real bugs.
      </p>

      <h3>3. Chrome Performance tab</h3>
      <p>
        Record a page load and look for the <strong>Hydration</strong> task in the flame
        chart. Long tasks blocking the main thread during hydration are clearly visible here.
      </p>

      <h3>4. React DevTools Profiler</h3>
      <p>
        Enable "Record why each component rendered" in the Profiler settings. During
        hydration, this shows which components triggered expensive re-renders or caused
        mismatches.
      </p>

      {/* ── Performance metrics ── */}
      <h2>Measuring hydration performance</h2>
      <table>
        <thead>
          <tr>
            <th>Metric</th>
            <th>What it measures</th>
            <th>Target</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["FCP", "First visible content painted", "< 1.8s"],
            ["LCP", "Largest content element painted", "< 2.5s"],
            ["TTI", "Page becomes fully interactive", "< 3.8s"],
            ["TBT", "Main thread blocked time", "< 200ms"],
            ["CLS", "Layout shift during hydration", "< 0.1"],
          ].map(([metric, desc, target]) => (
            <tr key={metric}>
              <td><code>{metric}</code></td>
              <td>{desc}</td>
              <td>{target}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        The most actionable metric for hydration specifically is{" "}
        <strong>TBT (Total Blocking Time)</strong> — the sum of all main thread blocks over
        50ms between FCP and TTI. Reducing TBT directly improves perceived interactivity.
      </p>

      {/* ── Optimisation ── */}
      <h2>Optimisation strategies</h2>

      <h3>1. React Server Components (RSC)</h3>
      <p>
        Next.js 13+ defaults to server components, which send zero JavaScript to the client.
        They render on the server and stream HTML — no hydration cost at all. Move as much
        logic as possible into server components and push <code>"use client"</code> to leaf
        nodes that actually need interactivity.
      </p>

      <h3>2. Dynamic imports with <code>ssr: false</code></h3>
      <pre><code>{`const HeavyChart = dynamic(() => import('./HeavyChart'), {
  ssr: false,
  loading: () => <ChartSkeleton />,
});`}</code></pre>
      <p>
        Heavy components (charts, maps, rich text editors) excluded from SSR don't block
        hydration of the rest of the page.
      </p>

      <h3>3. Virtualise large lists</h3>
      <p>
        Hydrating a table of 1,000 rows means React walks 1,000 DOM nodes and attaches
        listeners to each. Use <code>react-window</code> or TanStack Virtual — only the
        visible rows are ever in the DOM.
      </p>

      <h3>4. Reduce bundle size</h3>
      <p>
        Smaller JavaScript bundles download faster and parse faster — directly shortening
        the FCP→TTI window. Use Next.js bundle analyser to find and eliminate heavy
        dependencies:
      </p>
      <pre><code>{`ANALYZE=true npm run build`}</code></pre>

      <h3>5. Stabilise props to prevent re-renders</h3>
      <pre><code>{`// ❌ Bad — new object reference on every render causes child to re-hydrate
<Chart config={{ color: 'red' }} />

// ✅ Good — stable reference
const chartConfig = useMemo(() => ({ color: 'red' }), []);
<Chart config={chartConfig} />`}</code></pre>

      {/* ── Future ── */}
      <h2>The future: partial and selective hydration</h2>
      <p>
        The React team's long-term answer to hydration cost is to hydrate less. Three
        approaches are already shipping or in active development:
      </p>
      <ul>
        <li>
          <strong>React Server Components</strong> — components that never hydrate at all,
          because they produce no client JavaScript
        </li>
        <li>
          <strong>Selective hydration</strong> — React 18's <code>{"<Suspense>"}</code>{" "}
          allows React to hydrate the most urgent parts of the UI first (e.g. the component
          the user just clicked) and defer the rest
        </li>
        <li>
          <strong>Islands architecture</strong> — frameworks like Astro hydrate only
          explicitly interactive islands, leaving static content as plain HTML
        </li>
      </ul>
      <p>
        The direction is clear: less JavaScript shipped, less JavaScript hydrated, faster TTI.
        Understanding hydration deeply is what lets you make the right architectural choices
        as these tools evolve.
      </p>

      {/* ── Closing ── */}
      <h2>Final thoughts</h2>
      <p>
        Hydration isn't a React quirk — it's a fundamental constraint of the web. The browser
        can only display static HTML from the server; JavaScript is what makes it live. The
        cost of bridging that gap is hydration, and in large applications that cost adds up
        fast.
      </p>
      <p>
        As a senior engineer you should be able to answer: where is my hydration cost
        coming from? Which components are the worst offenders? Can this component be a server
        component instead? These questions — and the habit of measuring before optimising —
        are what separate engineers who understand the runtime from those who just use the
        framework.
      </p>
    </div>
  );
}
