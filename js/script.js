// DOM elements
const categoriesContainer = document.getElementById("categoriesContainer")
const addCollectionBtn = document.getElementById("addCollectionBtn")
const addSiteModal = document.getElementById("addSiteModal")
const addCollectionModal = document.getElementById("addCollectionModal")
const addSiteForm = document.getElementById("addSiteForm")
const addCollectionForm = document.getElementById("addCollectionForm")

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  renderCategories()
  setupEventListeners()
})

// Render all categories
function renderCategories() {
  categoriesContainer.innerHTML = ""

  categories.forEach((category) => {
    const categoryElement = createCategoryElement(category)
    categoriesContainer.appendChild(categoryElement)
  })

  updateCategorySelect()
}

// Create a category element
function createCategoryElement(category) {
  const categoryDiv = document.createElement("div")
  categoryDiv.className = "category-card"
  categoryDiv.innerHTML = `
        <button class="category-header" data-category-id="${category.id}">
            <div class="category-header-left">
                <svg class="chevron ${category.isExpanded ? "expanded" : ""}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="9,18 15,12 9,6"></polyline>
                </svg>
                <h2 class="category-title">${category.name}</h2>
                <span class="category-count">${category.websites.length}</span>
            </div>
        </button>
        <div class="category-content ${category.isExpanded ? "expanded" : ""}">
            <div class="category-content-inner">
                <div class="website-grid">
                    ${category.websites.map((website) => createWebsiteHTML(website)).join("")}
                    <div class="website-card add-site-card" data-category-id="${category.id}">
                        <div class="add-site-content">
                            <div class="add-site-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            </div>
                            <span class="add-site-text">Add Site</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `

  return categoryDiv
}

// Create website HTML
function createWebsiteHTML(website) {
  return `
        <div class="website-card" data-url="${website.url}">
            <div class="website-icon">
                <img src="${website.icon}" alt="${website.name} icon" onerror="this.src='imgs/generic-website-icon.png'">
            </div>
            <div class="website-info">
                <h3 class="website-name">${website.name}</h3>
                ${website.description ? `<p class="website-description">${website.description}</p>` : ""}
            </div>
            <svg class="external-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="m7 17 10-10"></path>
                <path d="M17 7H7v10"></path>
            </svg>
        </div>
    `
}

// Setup event listeners
function setupEventListeners() {
  // Category toggle
  categoriesContainer.addEventListener("click", (e) => {
    if (e.target.closest(".category-header")) {
      const categoryId = e.target.closest(".category-header").dataset.categoryId
      toggleCategory(categoryId)
    }

    // Website click
    if (e.target.closest(".website-card:not(.add-site-card)")) {
      const url = e.target.closest(".website-card").dataset.url
      window.open(url, "_blank", "noopener,noreferrer")
    }

    // Add site button click
    if (e.target.closest(".add-site-card")) {
      const categoryId = e.target.closest(".add-site-card").dataset.categoryId
      openAddSiteModal(categoryId)
    }
  })

  // Add collection button
  addCollectionBtn.addEventListener("click", () => {
    openAddCollectionModal()
  })

  // Modal close buttons
  document.getElementById("closeSiteModal").addEventListener("click", closeAddSiteModal)
  document.getElementById("closeCollectionModal").addEventListener("click", closeAddCollectionModal)
  document.getElementById("cancelSiteBtn").addEventListener("click", closeAddSiteModal)
  document.getElementById("cancelCollectionBtn").addEventListener("click", closeAddCollectionModal)

  // Modal backdrop clicks
  addSiteModal.addEventListener("click", (e) => {
    if (e.target === addSiteModal) closeAddSiteModal()
  })

  addCollectionModal.addEventListener("click", (e) => {
    if (e.target === addCollectionModal) closeAddCollectionModal()
  })

  // Form submissions
  addSiteForm.addEventListener("submit", handleAddSite)
  addCollectionForm.addEventListener("submit", handleAddCollection)
}

// Toggle category expansion
function toggleCategory(categoryId) {
  const category = categories.find((cat) => cat.id === categoryId)
  if (category) {
    category.isExpanded = !category.isExpanded
    renderCategories()
  }
}

// Modal functions
function openAddSiteModal(categoryId = "") {
  document.getElementById("siteCategory").value = categoryId
  addSiteModal.classList.add("active")
  document.body.style.overflow = "hidden"
}

function closeAddSiteModal() {
  addSiteModal.classList.remove("active")
  document.body.style.overflow = ""
  addSiteForm.reset()
}

function openAddCollectionModal() {
  addCollectionModal.classList.add("active")
  document.body.style.overflow = "hidden"
}

function closeAddCollectionModal() {
  addCollectionModal.classList.remove("active")
  document.body.style.overflow = ""
  addCollectionForm.reset()
}

// Handle add site form submission
function handleAddSite(e) {
  e.preventDefault()

  const formData = new FormData(e.target)
  const name = document.getElementById("siteName").value.trim()
  const url = document.getElementById("siteUrl").value.trim()
  const categoryId = document.getElementById("siteCategory").value
  const description = document.getElementById("siteDescription").value.trim()

  if (!name || !url || !categoryId) {
    alert("Please fill in all required fields")
    return
  }

  const newWebsite = {
    id: Date.now().toString(),
    name: name,
    url: url.startsWith("http") ? url : `https://${url}`,
    icon: `/placeholder.svg?height=32&width=32&query=${encodeURIComponent(name + " logo")}`,
    description: description || undefined,
  }

  const category = categories.find((cat) => cat.id === categoryId)
  if (category) {
    category.websites.push(newWebsite)
    renderCategories()
    closeAddSiteModal()
  }
}

// Handle add collection form submission
function handleAddCollection(e) {
  e.preventDefault()

  const name = document.getElementById("collectionName").value.trim()

  if (!name) {
    alert("Please enter a collection name")
    return
  }

  const newCategory = {
    id: Date.now().toString(),
    name: name,
    isExpanded: true,
    websites: [],
  }

  categories.push(newCategory)
  renderCategories()
  closeAddCollectionModal()
}

// Update category select options
function updateCategorySelect() {
  const select = document.getElementById("siteCategory")
  select.innerHTML = '<option value="">Select a category</option>'

  categories.forEach((category) => {
    const option = document.createElement("option")
    option.value = category.id
    option.textContent = category.name
    select.appendChild(option)
  })
}
