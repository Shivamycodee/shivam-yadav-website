import type { MDXComponents } from "mdx/types"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold mb-6 text-foreground">
        <span className="text-green-500">{">"}</span> {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold mb-4 mt-8 text-foreground border-l-4 border-green-500 pl-4">{children}</h2>
    ),
    h3: ({ children }) => <h3 className="text-xl font-medium mb-3 mt-6 text-foreground">{children}</h3>,
    p: ({ children }) => <p className="text-muted-foreground leading-relaxed mb-4">{children}</p>,
    code: ({ children }) => (
      <code className="bg-muted text-green-500 px-2 py-1 rounded text-sm border border-green-500/20">{children}</code>
    ),
    pre: ({ children }) => (
      <pre className="bg-black border border-green-500/30 p-4 rounded-lg overflow-x-auto mb-4">
        <code className="text-green-400">{children}</code>
      </pre>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-green-500 hover:text-green-400 transition-colors underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    ul: ({ children }) => <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal list-inside text-muted-foreground mb-4 space-y-2">{children}</ol>,
    ...components,
  }
}
