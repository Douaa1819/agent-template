const CONFIG = {
  animationDelay: 100,
  loadingDuration: 1000,
}

const defaultData = {
  NomEntreprise: "Pardeux e-learning",
  SecteurActivite: "Formation numérique, technopédagogie, e-learning, réalité virtuelle",
  EtatEntreprise:
    "Pardeux est une PME québécoise fondée en 2010, spécialisée dans la conception de formations interactives numériques. Elle compte 24 employés et collabore avec un large réseau de pigistes au Canada. Son siège social est à Longueuil. L'entreprise propose des services en formation mobile, jeux sérieux, scénarisation, LMS, storytelling, réalité virtuelle et plus encore. Elle travaille principalement avec des clients B2B : grandes entreprises, organisations publiques, secteurs réglementés (santé, finance, tourisme, éducation...).",
  Mission:
    "Capter le savoir et le transférer efficacement grâce à des expériences de formation engageantes et technologiques.",
  Vision:
    "Faire rayonner l'expertise de formation en ligne grâce à des expériences immersives centrées utilisateur, au service de la performance et du changement.",
  Positionnement:
    "Pardeux se positionne comme un acteur innovant du secteur de la formation numérique. Son marché cible inclut les grandes organisations souhaitant moderniser leurs parcours de formation. Sa différenciation repose sur une approche technopédagogique avancée, des solutions sur mesure, et une méthodologie fluide issue du Design Thinking et de l'Agilité.",
  SignatureStrategique:
    "L'entreprise mise sur l'accessibilité, la personnalisation, et une méthodologie propriétaire (outil zest™). Ses produits offrent un design unique, une forte orientation UX, et un accompagnement stratégique tout au long du parcours client. Elle combine expertise pédagogique, créativité visuelle et maîtrise technologique.",
  Objectifs:
    "À court terme : améliorer l'automatisation, l'acquisition de leads et la conversion des prospects. \nÀ moyen terme : augmenter la productivité de 30 à 50% via des systèmes intégrés. \nÀ long terme : atteindre 25% de marge bénéficiaire, conquérir de nouveaux marchés (Ontario notamment) et devenir une référence canadienne en formation immersive.",
  Enjeux:
    "Les systèmes actuels ne communiquent pas entre eux (CRM, gestion de projet, facturation). Cela crée de la duplication, des pertes d'information et freine la prise de décision. L'enjeu principal est d'augmenter la rentabilité par l'automatisation, la centralisation des données et le déploiement de processus interconnectés.",
  Besoins:
    "Mise en place de systèmes communicants, tableau de bord unifié, formation du personnel, documentation des processus, CRM complet, outils d'analyse de performance, et alignement organisationnel autour des objectifs numériques.",
  Recommandations:
    "1. Déployer un CRM complet (HubSpot Pro ou équivalent) interfacé avec la gestion de projet et la facturation.\n2. Créer des tableaux de bord automatisés pour le suivi des KPIs opérationnels et commerciaux.\n3. Implémenter un système de capture de leads intégré au site web avec scoring.\n4. Formaliser les processus de vente, support et gestion de projet (documentés et mesurables).\n5. Former les équipes sur les nouveaux outils numériques.\n6. Prioriser l'automatisation des relances client pour améliorer la récurrence et la conversion.",
  Opportunités:
    "Croissance du secteur de la formation numérique post-pandémie, forte réputation auprès de clients actuels, développement du marché anglophone (Ontario), commercialisation du produit zest™, accessibilité accrue, subventions à l'innovation.",
  Menaces:
    "Complexité des processus internes, concurrence moins chère, barrière linguistique en Ontario, manque d'automatisation actuelle, coûts de mise en œuvre, absence de stratégie marketing centralisée.",
  Faiblesses:
    "Outils numériques fragmentés, duplication des données, manque de relances automatiques, peu de tableaux de bord, CRM sous-utilisé, absence d'évaluations systématiques sur les campagnes marketing.",
  Forces:
    "Expertise unique en technopédagogie, culture d'entreprise forte, équipe multidisciplinaire engagée, outil zest™ en brevetage, grande fidélité client (80% de reconversion), notoriété croissante au Québec.",
  Conclusion:
    "Pardeux est à un tournant stratégique. Pour structurer sa croissance, elle doit rapidement intégrer des outils numériques unifiés, automatiser ses processus, former ses équipes, et aligner ses opérations autour d'objectifs clairs. Ce plan permet de poser les fondations solides d'une expansion pérenne et innovante.",
  Personas: [
    {
      nom: "Marie Tremblay",
      role: "Directrice RH",
      secteur: "Santé publique",
      entreprise: "Clinique SantéPlus",
      chiffreAffaires: "8M$",
      tailleEntreprise: "120 employés",
      besoins:
        "Digitaliser la formation continue, automatiser l'onboarding, offrir des contenus accessibles et certifiants.",
      douleurs:
        "Manque de temps, résistance au changement, contraintes budgétaires, offres de formation trop génériques.",
      objectifs: "Standardiser les parcours de formation internes et améliorer l'engagement des employés.",
      comportementsNumeriques:
        "Active sur LinkedIn, lit les newsletters RH (ex. Revue RH), suit des salons RH, écoute des balados sur la gestion du changement.",
    },
    {
      nom: "Karine Duval",
      role: "Conseillère pédagogique",
      secteur: "Organisme public",
      entreprise: "Institut de formation municipale",
      chiffreAffaires: "Non précisé",
      tailleEntreprise: "80 employés",
      besoins: "Moderniser les contenus e-learning, intégrer de la gamification, former à distance.",
      douleurs: "Contenus désuets, outils peu intuitifs, lourdeur administrative.",
      objectifs: "Faire évoluer les formations vers des formats hybrides engageants et inclusifs.",
      comportementsNumeriques:
        "Fait beaucoup de recherches sur Google, suit des pages LinkedIn sectorielles, s'inscrit à des ateliers virtuels, suit des MOOC spécialisés.",
    },
    {
      nom: "Luc Bouchard",
      role: "Responsable développement organisationnel",
      secteur: "Gouvernement",
      entreprise: "Ministère de la transformation numérique",
      chiffreAffaires: "Non applicable",
      tailleEntreprise: "500+",
      besoins: "Former de grandes équipes, déployer des plateformes LMS, assurer la conformité et l'accessibilité.",
      douleurs: "Rigidité des processus d'approvisionnement, difficulté à impliquer les experts internes.",
      objectifs: "Externaliser des projets e-learning complexes tout en garantissant des standards élevés.",
      comportementsNumeriques:
        "LinkedIn quotidien, lit des rapports sur l'innovation publique, participe à des appels d'offres, suit les webinaires spécialisés en innovation RH.",
    },
  ],
  AnalyseWeb: {
    Performance:
      "Le site présente un temps de chargement moyen de 3.5s sur mobile, ce qui peut être amélioré pour une meilleure expérience utilisateur. Le score Lighthouse est de 65/100.",
    SEO: "L'optimisation SEO est basique. Les balises meta sont présentes mais peu optimisées. Le site manque de mots-clés ciblés et d'une stratégie de contenu pour le référencement naturel.",
    UX: "L'interface utilisateur est claire mais l'expérience de navigation pourrait être fluidifiée. Des points d'amélioration incluent la hiérarchie visuelle et la clarté des appels à l'action.",
    Technologies:
      "Le site est construit avec WordPress et utilise des plugins standards. Il n'y a pas de technologies avancées ou de frameworks spécifiques détectés.",
  },
}

let currentData = defaultData

document.addEventListener("DOMContentLoaded", () => {
  initializeApp()
})

function initializeApp() {
  setTimeout(() => {
    initializeNavigation()
    loadData(currentData)
    setReportDate()
  }, CONFIG.loadingDuration)
}

function initializeNavigation() {
  const navItems = document.querySelectorAll(".nav-item")
  const sections = document.querySelectorAll(".section")

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      const targetSection = item.getAttribute("data-section")

      navItems.forEach((nav) => nav.classList.remove("active"))
      item.classList.add("active")

      sections.forEach((section) => {
        section.classList.remove("active")
        if (section.id === targetSection) {
          section.classList.add("active")
        }
      })

      document.querySelector(".main").scrollIntoView({
        behavior: "smooth",
      })
    })
  })
}

// API publique pour injection de données - SUPER FACILE À UTILISER !
function injectData(newData) {
  if (!newData || typeof newData !== "object") {
    console.error(" Données invalides. Utilisez un objet JSON valide.")
    return false
  }

  console.log(" Injection des nouvelles données...")
  currentData = { ...currentData, ...newData }
  loadData(currentData)
  console.log("Données injectées avec succès !")
  return true
}

// Chargement des données
function loadData(data) {
  try {
    updateCompanyName(data.NomEntreprise)
    loadOverviewSection(data)
    loadStrategySection(data)
    loadAnalysisSection(data)
    loadRecommendationsSection(data)
    loadPersonasSection(data.Personas)
    loadWebAnalysisSection(data.AnalyseWeb) 
    loadConclusionSection(data)
  } catch (error) {
    console.error("❌ Erreur lors du chargement:", error)
  }
}

// Mise à jour du nom de l'entreprise
function updateCompanyName(name) {
  const companyDisplay = document.getElementById("company-display")
  if (companyDisplay && name) {
    companyDisplay.textContent = name
  }
}

// Chargement des sections
function loadOverviewSection(data) {
  const elements = {
    "etat-entreprise": data.EtatEntreprise,
    "secteur-activite": data.SecteurActivite,
    positionnement: data.Positionnement,
    enjeux: data.Enjeux,
    besoins: data.Besoins,
  }

  Object.entries(elements).forEach(([id, content]) => {
    const element = document.getElementById(id)
    if (element && content) {
      element.textContent = content
    }
  })
}

function loadStrategySection(data) {
  const elements = {
    mission: data.Mission,
    vision: data.Vision,
    "signature-strategique": data.SignatureStrategique,
    objectifs: formatObjectives(data.Objectifs),
  }

  Object.entries(elements).forEach(([id, content]) => {
    const element = document.getElementById(id)
    if (element && content) {
      if (id === "objectifs") {
        element.innerHTML = content
      } else {
        element.textContent = content
      }
    }
  })
}

function loadAnalysisSection(data) {
  const elements = {
    forces: data.Forces,
    faiblesses: data.Faiblesses,
    opportunites: data.Opportunités,
    menaces: data.Menaces,
  }

  Object.entries(elements).forEach(([id, content]) => {
    const element = document.getElementById(id)
    if (element && content) {
      element.textContent = content
    }
  })
}

function loadRecommendationsSection(data) {
  const container = document.getElementById("recommendations-list")
  if (!container || !data.Recommandations) return

  const recommendations = parseRecommendations(data.Recommandations)
  container.innerHTML = ""

  recommendations.forEach((rec, index) => {
    const item = createRecommendationItem(rec, index + 1)
    container.appendChild(item)
  })
}

function loadPersonasSection(personas) {
  const container = document.getElementById("personas-grid")
  if (!container || !personas) return

  container.innerHTML = ""

  personas.forEach((persona, index) => {
    const card = createPersonaCard(persona, index)
    container.appendChild(card)
  })
}

// l'analyse web
function loadWebAnalysisSection(webAnalysisData) {
  if (!webAnalysisData) return

  const elements = {
    "web-performance": webAnalysisData.Performance,
    "web-seo": webAnalysisData.SEO,
    "web-ux": webAnalysisData.UX,
    "web-technologies": webAnalysisData.Technologies,
  }

  Object.entries(elements).forEach(([id, content]) => {
    const element = document.getElementById(id)
    if (element && content) {
      element.textContent = content
    }
  })
}

// Fonction pour la conclusion
function loadConclusionSection(data) {
  const conclusionElement = document.getElementById("conclusion-text")
  if (conclusionElement && data.Conclusion) {
    conclusionElement.textContent = data.Conclusion
  }
}

// Utilitaires
function formatObjectives(objectives) {
  if (!objectives) return ""

  return objectives
    .split("\n")
    .filter((line) => line.trim())
    .map(
      (line) => `<div class="objective-item">
            <i class="fas fa-arrow-right"></i>
            <span>${line.trim()}</span>
        </div>`,
    )
    .join("")
}

function parseRecommendations(text) {
  if (!text) return []

  return text
    .split("\n")
    .filter((line) => line.trim() && line.match(/^\d+\./))
    .map((line) => line.replace(/^\d+\.\s*/, "").trim())
}

function createRecommendationItem(text, number) {
  const item = document.createElement("div")
  item.className = "recommendation-item"

  item.innerHTML = `
        <div class="recommendation-number">${number}</div>
        <div class="recommendation-content">
            <p>${text}</p>
        </div>
    `

  return item
}

function createPersonaCard(persona, index) {
  const card = document.createElement("div")
  card.className = "persona-card"

  card.innerHTML = `
        <div class="persona-header">
            <div class="persona-avatar">
                <i class="fas fa-user-tie"></i>
            </div>
            <div class="persona-name">${persona.nom}</div>
            <div class="persona-role">${persona.role}</div>
        </div>
        <div class="persona-body">
            <div class="persona-info">
                <div class="info-item">
                    <div class="info-label">Entreprise</div>
                    <div class="info-value">${persona.entreprise}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Secteur</div>
                    <div class="info-value">${persona.secteur}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">CA</div>
                    <div class="info-value">${persona.chiffreAffaires}</div>
                </div>
                <div class="info-item">
                    <div class="info-label">Taille</div>
                    <div class="info-value">${persona.tailleEntreprise}</div>
                </div>
            </div>
            
            <div class="persona-section">
                <div class="section-title">
                    <i class="fas fa-bullseye"></i>
                    Besoins principaux
                </div>
                <div class="section-content">${persona.besoins}</div>
            </div>
            
            <div class="persona-section">
                <div class="section-title">
                    <i class="fas fa-exclamation-triangle"></i>
                    Points de douleur
                </div>
                <div class="section-content">${persona.douleurs}</div>
            </div>
            
            <div class="persona-section">
                <div class="section-title">
                    <i class="fas fa-target"></i>
                    Objectifs clés
                </div>
                <div class="section-content">${persona.objectifs}</div>
            </div>
            
            <div class="persona-section">
                <div class="section-title">
                    <i class="fas fa-mobile-alt"></i>
                    Comportement numérique
                </div>
                <div class="section-content">${persona.comportementsNumeriques}</div>
            </div>
        </div>
    `

  return card
}

function setReportDate() {
  const dateElement = document.getElementById("footer-date")

  if (dateElement) {
    const now = new Date()
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
    const formattedDate = now.toLocaleDateString("fr-FR", options)

    dateElement.textContent = `Rapport généré le ${formattedDate}`
  }
}

window.DigitalPlan = {
  inject: injectData,

  getData: () => currentData,

  reload: loadData,
}

// console.log(`
// TEMPLATE DIGITAL PLAN - PRÊT À UTILISER !

// COMMENT INJECTER VOS DONNÉES :

// Copiez votre JSON
//  Utilisez cette commande dans la console :

//    DigitalPlan.inject({
//      "NomEntreprise": "Votre Entreprise",
//      "SecteurActivite": "Votre secteur",
//      // ... vos autres données
//      "AnalyseWeb": {
//         "Performance": "...",
//         "SEO": "...",
//         "UX": "...",
//         "Technologies": "..."
//      }
//    })

//  C'est tout ! Le template se met à jour automatiquement.

// Exemple rapide :
//    DigitalPlan.inject({"NomEntreprise": "Ma Super Entreprise"})
//  Pour voir les données actuelles :
//    DigitalPlan.getData()
// `)
