import { useState, useEffect } from "react";

const PASSWORD = "Bordeaux33";

function LockScreen({ onUnlock }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const tryUnlock = () => {
    if (input === PASSWORD) {
      onUnlock();
    } else {
      setError(true);
      setInput("");
      setTimeout(() => setError(false), 1500);
    }
  };

  return (
    <div style={{
      minHeight: "100vh", background: "#0F0F0F", display: "flex",
      alignItems: "center", justifyContent: "center", fontFamily: "'Georgia', serif",
    }}>
      <div style={{ textAlign: "center", width: "260px" }}>
        <div style={{ fontSize: "32px", marginBottom: "8px" }}>🔒</div>
        <div style={{ fontSize: "11px", letterSpacing: "3px", color: "#555", textTransform: "uppercase", marginBottom: "4px" }}>
          Tableau de bord
        </div>
        <div style={{ fontSize: "20px", fontWeight: "700", color: "#E8E8E0", marginBottom: "28px" }}>Maël</div>

        <input
          type="password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && tryUnlock()}
          placeholder="Mot de passe"
          autoFocus
          style={{
            width: "100%", background: error ? "#2A1010" : "#1A1A1A",
            border: error ? "1px solid #FF4444" : "1px solid #2A2A2A",
            borderRadius: "8px", color: "#E8E8E0", fontSize: "14px",
            padding: "11px 14px", outline: "none", boxSizing: "border-box",
            fontFamily: "'Georgia', serif", textAlign: "center",
            transition: "all 0.2s ease", marginBottom: "10px",
          }}
        />
        {error && (
          <div style={{ fontSize: "11px", color: "#FF4444", marginBottom: "8px" }}>
            Mot de passe incorrect
          </div>
        )}
        <button onClick={tryUnlock} style={{
          width: "100%", padding: "11px", borderRadius: "8px",
          background: "#E8C547", border: "none", color: "#000",
          fontSize: "12px", fontWeight: "700", cursor: "pointer",
          fontFamily: "'Georgia', serif", letterSpacing: "1px",
        }}>
          Entrer
        </button>
      </div>
    </div>
  );
}

const PRIORITY = {
  urgent: { label: "Urgent", dot: "🔴", order: 0 },
  important: { label: "Important", dot: "🟡", order: 1 },
  normal: { label: "Quand j'ai le temps", dot: "⚪", order: 2 },
};

const CATEGORY_META = {
  perso:        { label: "Perso",                      icon: "👤", color: "#E8C547" },
  investissement:{ label: "Investissement immobilier", icon: "🏢", color: "#4ECDC4" },
  agence:       { label: "Création agence immo",       icon: "🏗️", color: "#FF6B6B" },
  commercial:   { label: "Agent commercial",           icon: "🤝", color: "#A78BFA" },
  vae:          { label: "VAE",                        icon: "🎓", color: "#34D399" },
  proches:      { label: "Proches",                    icon: "❤️", color: "#F472B6" },
};

const initialData = {
  perso: { tasks: [
    { id: 1,  text: "Appeler garage Honda",                        done: false, priority: "normal" },
    { id: 2,  text: "Point facture",                               done: false, priority: "normal" },
    { id: 3,  text: "Déclaration revenus",                         done: false, priority: "normal" },
    { id: 4,  text: "Reprendre RDV ostéo",                         done: false, priority: "normal" },
    { id: 5,  text: "Remboursement RDV ostéo n°1",                 done: false, priority: "normal" },
    { id: 6,  text: "Réclamation Getaround",                       done: false, priority: "normal" },
    { id: 7,  text: "Contacter URSSAF",                            done: false, priority: "normal" },
    { id: 8,  text: "Relancer agence (litige locataire)",          done: false, priority: "normal" },
    { id: 9,  text: "Arrêter badge autoroute",                     done: false, priority: "normal" },
    { id: 10, text: "Point service juridique Enedis",              done: false, priority: "normal" },
    { id: 11, text: "Prendre RDV dentiste — détartrage",           done: false, priority: "normal" },
  ]},
  investissement: { tasks: [
    { id: 1, text: "Appeler électricien",                                          done: false, priority: "normal" },
    { id: 2, text: "Terminer travaux Nani",                                        done: false, priority: "normal" },
    { id: 3, text: "Prévoir massif jardin",                                        done: false, priority: "normal" },
    { id: 4, text: "Suivi impayé locataire appt n°1",                             done: false, priority: "normal" },
    { id: 5, text: "Réparation porte d'entrée",                                    done: false, priority: "normal" },
    { id: 6, text: "Répondre mail mère + locataire",                               done: false, priority: "normal" },
    { id: 7, text: "Voir compte bancaire Crédit Agricole Sainte-Foy-la-Grande",   done: false, priority: "normal" },
    { id: 8, text: "Vérification fibre immeuble",                                  done: false, priority: "normal" },
  ]},
  agence: { tasks: [
    { id: 1,  text: "Checker contrat Matthieu Magnan",                             done: false, priority: "normal" },
    { id: 2,  text: "Mail offre pour client Delbos",                               done: false, priority: "normal" },
    { id: 3,  text: "Mise en place Claude / Cowork",                               done: false, priority: "normal" },
    { id: 4,  text: "Prendre abonnement Google Workspace",                         done: false, priority: "normal" },
    { id: 5,  text: "Création contenu réseaux sociaux 1 mois",                     done: false, priority: "normal" },
    { id: 6,  text: "Appeler marchand de biens (grosse société)",                  done: false, priority: "normal" },
    { id: 7,  text: "Appeler François Divisia",                                    done: false, priority: "normal" },
    { id: 8,  text: "Création mail anciens clients",                               done: false, priority: "normal" },
    { id: 9,  text: "Appeler comptable",                                           done: false, priority: "normal" },
    { id: 10, text: "Création simulateur coût réel de gestion",                    done: false, priority: "normal" },
    { id: 11, text: "Terminer simulateur loyer plafonné",                          done: false, priority: "normal" },
    { id: 12, text: "Commander panneau",                                           done: false, priority: "normal" },
    { id: 13, text: "Commander cartes de visite / goodies",                        done: false, priority: "normal" },
    { id: 14, text: "Envoyer message cliente dernier étage Victor Hugo",           done: false, priority: "normal" },
    { id: 15, text: "Contacter Jordi — photographe pour site internet",            done: false, priority: "normal" },
    { id: 16, text: "Prendre photo professionnelle",                               done: false, priority: "normal" },
  ]},
  commercial: { tasks: [
    { id: 1,  text: "Créer mandat Bacalan",                                                        done: false, priority: "normal" },
    { id: 2,  text: "Envoyer éléments location Blanchot",                                          done: false, priority: "normal" },
    { id: 3,  text: "Mail point vente jardin public",                                              done: false, priority: "normal" },
    { id: 4,  text: "Contacter locataire RDC Porte de la Monnaie",                                done: false, priority: "normal" },
    { id: 5,  text: "Appeler Matthieu — point client",                                             done: false, priority: "normal" },
    { id: 6,  text: "Appeler Romain — échange",                                                   done: false, priority: "normal" },
    { id: 7,  text: "Appeler Martin",                                                              done: false, priority: "normal" },
    { id: 8,  text: "Mandat Paul Decaudin",                                                        done: false, priority: "normal" },
    { id: 9,  text: "Développer fichier client via Claude",                                        done: false, priority: "normal" },
    { id: 10, text: "SMS Monsieur Collin",                                                         done: false, priority: "normal" },
    { id: 11, text: "Chercher cadastre 39 rue Condorcet",                                          done: false, priority: "normal" },
    { id: 12, text: "Chercher cadastre gauche du 8 rue La Grange",                                done: false, priority: "normal" },
    { id: 13, text: "Contacter foncière Screen",                                                   done: false, priority: "normal" },
    { id: 14, text: "Mise en place automatisation Claude — recherche LeBonCoin + DPE + croisement des fichiers", done: false, priority: "normal" },
    { id: 15, text: "Contacter immeuble arrêt tram Achard",                                       done: false, priority: "normal" },
    { id: 16, text: "Contacter marchand de biens",                                                 done: false, priority: "normal" },
    { id: 17, text: "Cadastre 31 rue des Rétaillons",                                             done: false, priority: "normal" },
    { id: 18, text: "Cadastre 40 rue Pourman",                                                    done: false, priority: "normal" },
    { id: 19, text: "Commander panneau",                                                           done: false, priority: "normal" },
    { id: 20, text: "Point bien M. Cargou",                                                        done: false, priority: "normal" },
    { id: 21, text: "Créer fichier chasseur d'appartement",                                        done: false, priority: "normal" },
    { id: 22, text: "Créer fichier marchand de biens",                                             done: false, priority: "normal" },
    { id: 23, text: "Créer fichier recherche acquéreur",                                           done: false, priority: "normal" },
  ]},
  vae: { tasks: [] },
  proches: { tasks: [
    { id: 1, text: "Réparer congélateur maman",               done: false, priority: "normal" },
    { id: 2, text: "Analyser compromis Maeva",                done: false, priority: "normal" },
    { id: 3, text: "Chiffrer travaux Maeva",                  done: false, priority: "normal" },
    { id: 4, text: "Plan projet Maeva",                       done: false, priority: "normal" },
    { id: 5, text: "Prévoir pièces portail papa et maman",    done: false, priority: "normal" },
  ]},
};

const sortTasks = (tasks) =>
  [...tasks].sort((a, b) => {
    if (a.done !== b.done) return a.done ? 1 : -1;
    return PRIORITY[a.priority].order - PRIORITY[b.priority].order;
  });

const nextId = (tasks) => (tasks.length === 0 ? 1 : Math.max(...tasks.map((t) => t.id)) + 1);

export default function App() {
  const [unlocked, setUnlocked] = useState(() => {
    try { return sessionStorage.getItem("mael-auth") === "1"; } catch { return false; }
  });

  const handleUnlock = () => {
    try { sessionStorage.setItem("mael-auth", "1"); } catch {}
    setUnlocked(true);
  };

  if (!unlocked) return <LockScreen onUnlock={handleUnlock} />;

  return <Dashboard />;
}

function Dashboard() {
  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem("mael-tasks-v4");
      if (saved) return JSON.parse(saved);
    } catch {}
    return initialData;
  });

  const [activeCategory, setActiveCategory] = useState("all");
  const [showDone, setShowDone] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [showAdd, setShowAdd] = useState(false);
  const [newText, setNewText] = useState("");
  const [newCat, setNewCat] = useState("perso");
  const [newPriority, setNewPriority] = useState("normal");

  useEffect(() => {
    try { localStorage.setItem("mael-tasks-v4", JSON.stringify(data)); } catch {}
  }, [data]);

  const toggleTask = (catKey, taskId) => {
    setData((prev) => ({
      ...prev,
      [catKey]: { tasks: prev[catKey].tasks.map((t) => t.id === taskId ? { ...t, done: !t.done } : t) },
    }));
  };

  const setPriority = (catKey, taskId, priority) => {
    setData((prev) => ({
      ...prev,
      [catKey]: { tasks: prev[catKey].tasks.map((t) => t.id === taskId ? { ...t, priority } : t) },
    }));
    setOpenMenu(null);
  };

  const addTask = () => {
    if (!newText.trim()) return;
    setData((prev) => ({
      ...prev,
      [newCat]: {
        tasks: [...prev[newCat].tasks, { id: nextId(prev[newCat].tasks), text: newText.trim(), done: false, priority: newPriority }],
      },
    }));
    setNewText("");
    setNewPriority("normal");
    setShowAdd(false);
  };

  const deleteTask = (catKey, taskId) => {
    setData((prev) => ({
      ...prev,
      [catKey]: { tasks: prev[catKey].tasks.filter((t) => t.id !== taskId) },
    }));
  };

  const totalTasks = Object.values(data).reduce((acc, cat) => acc + cat.tasks.length, 0);
  const doneTasks = Object.values(data).reduce((acc, cat) => acc + cat.tasks.filter((t) => t.done).length, 0);
  const progress = totalTasks > 0 ? Math.round((doneTasks / totalTasks) * 100) : 0;

  const categories = Object.entries(data);
  const filteredCategories = activeCategory === "all" ? categories : categories.filter(([k]) => k === activeCategory);

  return (
    <div
      style={{ minHeight: "100vh", background: "#0F0F0F", fontFamily: "'Georgia', serif", color: "#E8E8E0" }}
      onClick={() => setOpenMenu(null)}
    >
      {/* Header */}
      <div style={{
        background: "#161616", borderBottom: "1px solid #2A2A2A",
        padding: "20px 16px 14px", position: "sticky", top: 0, zIndex: 100,
      }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "12px" }}>
          <div>
            <div style={{ fontSize: "9px", letterSpacing: "3px", color: "#555", textTransform: "uppercase", marginBottom: "3px" }}>
              Tableau de bord
            </div>
            <div style={{ fontSize: "18px", fontWeight: "700", color: "#E8E8E0" }}>Maël</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: "22px", fontWeight: "700", color: "#E8C547", lineHeight: 1 }}>{progress}%</div>
              <div style={{ fontSize: "9px", color: "#444", marginTop: "2px" }}>{doneTasks}/{totalTasks} faites</div>
            </div>
            {/* Add button */}
            <button
              onClick={(e) => { e.stopPropagation(); setShowAdd(!showAdd); }}
              style={{
                width: "36px", height: "36px", borderRadius: "50%",
                background: showAdd ? "#E8C547" : "#1E1E1E",
                border: showAdd ? "none" : "1px solid #333",
                color: showAdd ? "#000" : "#E8C547",
                fontSize: "22px", cursor: "pointer", lineHeight: 1,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontWeight: "300", transition: "all 0.2s ease",
              }}
            >
              {showAdd ? "×" : "+"}
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div style={{ background: "#2A2A2A", borderRadius: "2px", height: "2px", marginBottom: "12px" }}>
          <div style={{ height: "2px", borderRadius: "2px", background: "#E8C547", width: `${progress}%`, transition: "width 0.4s ease" }} />
        </div>

        {/* Add form */}
        {showAdd && (
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#1A1A1A", border: "1px solid #2A2A2A", borderRadius: "10px",
              padding: "14px", marginBottom: "12px",
            }}
          >
            <div style={{ fontSize: "10px", letterSpacing: "2px", color: "#555", textTransform: "uppercase", marginBottom: "10px" }}>
              Nouvelle tâche
            </div>

            {/* Text input */}
            <input
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addTask()}
              placeholder="Description de la tâche..."
              style={{
                width: "100%", background: "#222", border: "1px solid #333", borderRadius: "6px",
                color: "#E8E8E0", fontSize: "13px", padding: "9px 10px", marginBottom: "10px",
                outline: "none", boxSizing: "border-box", fontFamily: "'Georgia', serif",
              }}
            />

            {/* Category select */}
            <div style={{ marginBottom: "10px" }}>
              <div style={{ fontSize: "9px", color: "#444", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "6px" }}>Catégorie</div>
              <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
                {Object.entries(CATEGORY_META).map(([key, meta]) => (
                  <button key={key} onClick={() => setNewCat(key)} style={{
                    padding: "4px 9px", borderRadius: "20px", cursor: "pointer", fontSize: "10px",
                    border: newCat === key ? `1px solid ${meta.color}` : "1px solid #2A2A2A",
                    background: newCat === key ? `${meta.color}20` : "transparent",
                    color: newCat === key ? meta.color : "#555",
                    display: "flex", alignItems: "center", gap: "4px",
                  }}>
                    <span>{meta.icon}</span>
                    <span>{meta.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Priority select */}
            <div style={{ marginBottom: "12px" }}>
              <div style={{ fontSize: "9px", color: "#444", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "6px" }}>Priorité</div>
              <div style={{ display: "flex", gap: "5px" }}>
                {Object.entries(PRIORITY).map(([key, p]) => (
                  <button key={key} onClick={() => setNewPriority(key)} style={{
                    padding: "4px 10px", borderRadius: "20px", cursor: "pointer", fontSize: "10px",
                    border: newPriority === key ? "1px solid #444" : "1px solid #2A2A2A",
                    background: newPriority === key ? "#2A2A2A" : "transparent",
                    color: newPriority === key ? "#E8E8E0" : "#555",
                    display: "flex", alignItems: "center", gap: "4px",
                  }}>
                    <span>{p.dot}</span><span>{p.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <button onClick={addTask} style={{
              width: "100%", padding: "9px", borderRadius: "6px",
              background: newText.trim() ? "#E8C547" : "#1E1E1E",
              border: "none", color: newText.trim() ? "#000" : "#333",
              fontSize: "12px", fontWeight: "700", cursor: newText.trim() ? "pointer" : "default",
              fontFamily: "'Georgia', serif", letterSpacing: "1px", transition: "all 0.15s ease",
            }}>
              Ajouter
            </button>
          </div>
        )}

        {/* Category tabs */}
        <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
          <button onClick={() => setActiveCategory("all")} style={{
            padding: "3px 9px", borderRadius: "20px", fontSize: "10px", cursor: "pointer",
            border: activeCategory === "all" ? "1px solid #E8C547" : "1px solid #2A2A2A",
            background: activeCategory === "all" ? "#E8C54718" : "transparent",
            color: activeCategory === "all" ? "#E8C547" : "#555",
          }}>Tout</button>
          {categories.map(([key]) => {
            const meta = CATEGORY_META[key];
            const cat = data[key];
            const catDone = cat.tasks.filter((t) => t.done).length;
            const catTotal = cat.tasks.length;
            return (
              <button key={key} onClick={() => setActiveCategory(key)} style={{
                padding: "3px 9px", borderRadius: "20px", fontSize: "10px", cursor: "pointer",
                border: activeCategory === key ? `1px solid ${meta.color}` : "1px solid #2A2A2A",
                background: activeCategory === key ? `${meta.color}18` : "transparent",
                color: activeCategory === key ? meta.color : "#555",
                display: "flex", alignItems: "center", gap: "3px",
              }}>
                <span>{meta.icon}</span>
                {catTotal > 0 && (
                  <span style={{
                    background: activeCategory === key ? meta.color : "#2A2A2A",
                    color: activeCategory === key ? "#000" : "#666",
                    borderRadius: "10px", padding: "0 4px", fontSize: "9px", fontFamily: "monospace",
                  }}>{catDone}/{catTotal}</span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Toggle done */}
      <div style={{ padding: "10px 16px 0", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", gap: "10px" }}>
          {Object.entries(PRIORITY).map(([key, p]) => (
            <div key={key} style={{ display: "flex", alignItems: "center", gap: "3px", fontSize: "9px", color: "#444" }}>
              <span>{p.dot}</span><span>{p.label}</span>
            </div>
          ))}
        </div>
        <button onClick={() => setShowDone(!showDone)} style={{
          background: "transparent", border: "1px solid #2A2A2A", color: "#444",
          fontSize: "9px", padding: "3px 8px", borderRadius: "20px", cursor: "pointer",
        }}>
          {showDone ? "Masquer" : "Voir"} faites
        </button>
      </div>

      {/* Categories */}
      <div style={{ padding: "12px 16px 60px" }}>
        {filteredCategories.map(([key]) => {
          const meta = CATEGORY_META[key];
          const cat = data[key];
          const sorted = sortTasks(cat.tasks);
          const visibleTasks = showDone ? sorted : sorted.filter((t) => !t.done);
          const catDone = cat.tasks.filter((t) => t.done).length;
          const catTotal = cat.tasks.length;
          const catProgress = catTotal > 0 ? Math.round((catDone / catTotal) * 100) : 0;

          return (
            <div key={key} style={{ marginBottom: "22px" }}>
              <div style={{
                display: "flex", alignItems: "center", gap: "7px",
                marginBottom: "7px", paddingBottom: "6px",
                borderBottom: `1px solid ${meta.color}25`,
              }}>
                <span style={{ fontSize: "13px" }}>{meta.icon}</span>
                <span style={{ fontSize: "10px", fontWeight: "700", letterSpacing: "1.5px", color: meta.color, textTransform: "uppercase" }}>
                  {meta.label}
                </span>
                <div style={{ flex: 1, height: "1px", background: `${meta.color}15` }} />
                <span style={{ fontSize: "9px", color: "#333", fontFamily: "monospace" }}>
                  {catProgress}% · {catDone}/{catTotal}
                </span>
              </div>

              {visibleTasks.length === 0 ? (
                <div style={{ color: "#2A2A2A", fontSize: "11px", fontStyle: "italic", paddingLeft: "6px" }}>
                  {cat.tasks.length === 0 ? "Aucune tâche" : "Tout est fait ✓"}
                </div>
              ) : (
                visibleTasks.map((task) => {
                  const isMenuOpen = openMenu?.catKey === key && openMenu?.taskId === task.id;
                  return (
                    <div key={task.id} style={{ position: "relative", marginBottom: "1px" }}>
                      <div style={{
                        display: "flex", alignItems: "flex-start", gap: "8px",
                        padding: "7px 6px", borderRadius: "6px",
                        background: task.done ? "#161616" : "transparent",
                      }}>
                        {/* Checkbox */}
                        <div onClick={() => toggleTask(key, task.id)} style={{
                          width: "14px", height: "14px", borderRadius: "3px", flexShrink: 0,
                          border: task.done ? `2px solid ${meta.color}` : "2px solid #2A2A2A",
                          background: task.done ? meta.color : "transparent",
                          marginTop: "2px", display: "flex", alignItems: "center", justifyContent: "center",
                          cursor: "pointer", transition: "all 0.15s ease",
                        }}>
                          {task.done && (
                            <svg width="8" height="6" viewBox="0 0 10 8" fill="none">
                              <path d="M1 4L3.5 6.5L9 1" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </div>

                        {/* Text */}
                        <span onClick={() => toggleTask(key, task.id)} style={{
                          fontSize: "12px", flex: 1, lineHeight: "1.5", cursor: "pointer",
                          color: task.done ? "#383838" : "#B8B8B0",
                          textDecoration: task.done ? "line-through" : "none",
                          transition: "all 0.15s ease",
                        }}>
                          {task.text}
                        </span>

                        {/* Priority dot */}
                        <button
                          onClick={(e) => { e.stopPropagation(); setOpenMenu(isMenuOpen ? null : { catKey: key, taskId: task.id }); }}
                          style={{
                            background: "transparent", border: "none", fontSize: "11px",
                            cursor: "pointer", padding: "0", flexShrink: 0,
                            opacity: task.done ? 0.2 : 0.8, lineHeight: 1, marginTop: "2px",
                          }}
                        >
                          {PRIORITY[task.priority]?.dot || "⚪"}
                        </button>

                        {/* Delete */}
                        <button
                          onClick={(e) => { e.stopPropagation(); deleteTask(key, task.id); }}
                          style={{
                            background: "transparent", border: "none", color: "#2A2A2A",
                            fontSize: "14px", cursor: "pointer", padding: "0", flexShrink: 0,
                            lineHeight: 1, marginTop: "1px",
                            opacity: task.done ? 0.5 : 1,
                          }}
                          title="Supprimer"
                        >
                          ×
                        </button>
                      </div>

                      {/* Priority dropdown */}
                      {isMenuOpen && (
                        <div onClick={(e) => e.stopPropagation()} style={{
                          position: "absolute", right: "20px", top: "30px", zIndex: 200,
                          background: "#1E1E1E", border: "1px solid #333", borderRadius: "8px",
                          padding: "4px", boxShadow: "0 8px 24px rgba(0,0,0,0.8)",
                        }}>
                          {Object.entries(PRIORITY).map(([pKey, p]) => (
                            <div key={pKey} onClick={() => setPriority(key, task.id, pKey)} style={{
                              display: "flex", alignItems: "center", gap: "8px",
                              padding: "6px 12px", borderRadius: "5px", cursor: "pointer",
                              background: task.priority === pKey ? "#2A2A2A" : "transparent",
                              color: task.priority === pKey ? "#E8E8E0" : "#777",
                              fontSize: "11px", whiteSpace: "nowrap",
                            }}>
                              <span>{p.dot}</span><span>{p.label}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
