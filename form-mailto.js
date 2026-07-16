(() => {
  const form = document.getElementById("wf-form-Contact-Form");
  if (!form) return;

  form.addEventListener(
    "submit",
    (event) => {
      event.preventDefault();
      event.stopImmediatePropagation();

      const data = new FormData(form);
      const lines = [];
      for (const [name, value] of data.entries()) {
        if (typeof value === "string" && value.trim()) {
          lines.push(`${name}: ${value.trim()}`);
        }
      }

      window.location.href = `mailto:thyme4mesarnia@gmail.com?subject=${encodeURIComponent("Thyme 4 Me website inquiry")}&body=${encodeURIComponent(lines.join("\n"))}`;
    },
    true,
  );
})();
