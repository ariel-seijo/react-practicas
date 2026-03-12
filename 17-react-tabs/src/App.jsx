import { useState } from "react";

function App() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <>
      <h1>Tabs</h1>

      <div>
        <button onClick={() => setActiveTab("profile")}>Perfil</button>

        <button onClick={() => setActiveTab("settings")}>Configuración</button>

        <button onClick={() => setActiveTab("security")}>Seguridad</button>
      </div>

      <div>
        {activeTab === "profile" && <p>Contenido del perfil</p>}
        {activeTab === "settings" && <p>Contenido de configuración</p>}
        {activeTab === "security" && <p>Contenido de seguridad</p>}
      </div>
    </>
  );
}

export default App;
