const $drapArea = document.getElementById("drapArea")
const $btnfile = document.getElementById("btnFile")
const $inputFile = document.getElementById("file")
const $progress = document.querySelector("#progress")

$btnfile.addEventListener("click", () => {
  $inputFile.click()
})

$drapArea.addEventListener("dragleave", e => {
  e.preventDefault()
  $drapArea.classList.remove("drag-drop--active")
  
})
$drapArea.addEventListener("drop", e => {
  e.preventDefault()
  files = e.dataTransfer.files[0]
  processFile(files)
  
})
$drapArea.addEventListener("dragover", e => {
  e.preventDefault()
  $drapArea.classList.add("drag-drop--active")

})

$inputFile.addEventListener("change", e => {
  const files = e.target.files[0]
  processFile(files)

})

const processFile = (files) => {
  const reader = new FileReader()
  reader.readAsDataURL(files)

  // completado
   reader.addEventListener("load", (e) => {
  }) 
  // evento cuando esta cargado
  reader.addEventListener("progress", e => {
    const loaded = e.loaded
    const total = e.total
    $progress.classList.add("progress--active")
    $progress.value = (loaded *100) / total
  })

  reader.addEventListener("loadend", e => {
    $progress.classList.remove("progress--active")
    $drapArea.classList.remove("drag-drop--active")
  })
}