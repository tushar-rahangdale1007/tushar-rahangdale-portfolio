const lines: Array<Array<{ t: string; c?: string }>> = [
  [{ t: "@RestController", c: "code-key" }],
  [{ t: "@RequestMapping" }, { t: "(\"/api/patients\")", c: "code-str" }],
  [{ t: "public class" }, { t: " PatientController", c: "code-key" }, { t: " {" }],
  [{ t: "" }],
  [{ t: "    private final" }, { t: " PatientService", c: "code-key" }, { t: ";" }],
  [{ t: "" }],
  [{ t: "    @GetMapping", c: "code-key" }],
  [{ t: "    public" }, { t: " List", c: "code-key" }, { t: "<" }, { t: "Patient", c: "code-key" }, { t: "> findAll() {" }],
  [{ t: "        return" }, { t: " service.findAll();" }],
  [{ t: "    }" }],
  [{ t: "" }],
  [{ t: "    @PostMapping", c: "code-key" }],
  [{ t: "    public" }, { t: " Patient", c: "code-key" }, { t: " register(" }],
  [{ t: "            @RequestBody", c: "code-key" }, { t: " Patient p) {" }],
  [{ t: "        return" }, { t: " service.save(p);" }],
  [{ t: "    }" }],
  [{ t: "}" }],
];

export function CodeCard() {
  return (
    <div className="print-hide overflow-hidden rounded-lg border border-border bg-code-bg shadow-sm">
      <div className="flex items-center justify-between border-b border-code-fg/10 px-3 py-2.5 sm:px-4">
        <span className="label-mono text-code-com">PatientController.java</span>
        <span className="label-mono text-code-com">Spring Boot</span>
      </div>
      <pre className="overflow-x-auto px-3 py-3 text-[11px] leading-5 sm:px-4 sm:py-4 sm:text-[12.5px] sm:leading-6">
        <code className="font-mono text-code-fg">
          {lines.map((line, i) => (
            <div key={i} className="flex gap-3 sm:gap-4">
              <span className="w-3 shrink-0 select-none text-right text-code-com sm:w-4">
                {i + 1}
              </span>
              <span className="whitespace-pre">
                {line.map((token, j) => (
                  <span key={j} className={token.c}>
                    {token.t}
                  </span>
                ))}
              </span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
}
