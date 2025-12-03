const namaInput = document.getElementById("namaInput");
const emailInput = document.getElementById("emailInput");
const alamatInput = document.getElementById("alamatInput");

const namaPreview = document.getElementById("namaPreview");
const emailPreview = document.getElementById("emailPreview");
const alamatPreview = document.getElementById("alamatPreview");


namaInput.addEventListener("input", () => {
  namaPreview.innerText = namaInput.value || "-";
});

emailInput.addEventListener("input", () => {
  emailPreview.innerText = emailInput.value || "-";
});

alamatInput.addEventListener("input", () => {
  alamatPreview.innerText = alamatInput.value || "-";
});
