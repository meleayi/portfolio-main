const stacks = [
  {
    title: "Frontend",
    items: ["REACT", "NEXT.JS", "TYPESCRIPT", "TAILWIND CSS", "MATERIAL UI", "ANT DESIGN", "SHADCN/UI"],
  },
  {
    title: "Backend",
    items: ["ASP.NET CORE", "NEST.JS", "DJANGO", "NODE.JS", "EXPRESS", "ENTITY FRAMEWORK"],
  },
  {
    title: "Databases",
    items: ["POSTGRESQL", "SQL SERVER", "MONGODB"],
  },
  {
    title: "Security & APIs",
    items: ["JWT", "OAUTH", "LDAP", "REST APIs", "WSO2"],
  },
  {
    title: "DevOps & Deployment",
    items: ["DOCKER", "CI/CD", "VERCEL", "NETLIFY", "IIS", "GIT", "GITHUB", "GITLAB"],
  },
  {
    title: "ORM & Data Layer",
    items: ["PRISMA", "TYPEORM", "DRIZZLE ORM",  "ENTITY FRAMEWORK"],
  },
];
export function Stack() {
  return (
    <section
      id="stack"
      className="py-24 border-y border-border bg-surface/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        
        {/* Title */}
        <div className="space-y-2">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter">
            TECHNOLOGY STACK
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            A structured overview of the technologies I use to build scalable
            enterprise and banking systems at Commercial Bank of Ethiopia.
          </p>
        </div>

        {/* Groups */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {stacks.map((group) => (
            <div
              key={group.title}
              className="space-y-4 p-6 rounded-xl border border-border bg-surface hover:bg-surface-2 transition"
            >
              <h3 className="font-display text-xl font-bold text-accent">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-[10px] px-2 py-1 bg-surface-2 border border-border rounded font-mono tracking-wider text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
