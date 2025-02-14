import { useState } from "react";
import "./App.css";

function App() {
  const [names, setNames] = useState("");
  const [inviteLink, setInviteLink] = useState("");
  const [message, setMessage] = useState("");

  const generateInvitation = () => {
    if (!names.trim()) return;
    const formattedNames = names
      .split(" ")
      .map((name) => name.trim())
      .join("+");
    const link = `https://digitainvite.id/windy-ferry/?to=${formattedNames}`;
    setInviteLink(link);
    setMessage(
      `_Assalamu’alaikum Warahmatullahi Wabarakatuh_\n\nYth. ${names}\n\nDengan mengharap rahmat dan ridho Allah Subhanahu Wa Ta’ala dan tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Sudara/i, teman sekaligus sahabat, untuk menghadiri acara pernikahan kami.\n\nBerikut link undangan kami untuk info lengkap dari acara bisa kunjungi :\n\n${link}\n\nMerupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir dan memberikan doa restu.\n\nKami yang berbahagia,\n*Ferry & Windy*\n________________________\n\nبَارَكَ اللهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ\n\n"Semoga Allah memberkahimu ketika bahagia dan ketika susah dan mengumpulkan kalian berdua dalam kebaikan."\n\n_Wassalamualaikum Warahmatullahi Wabarakatuh_`
    );
  };

  const sendToWhatsApp = () => {
    if (!message) return;
    const whatsappMessage = encodeURIComponent(message.normalize("NFKC"));
    window.open(`https://wa.me/?text=${whatsappMessage}`, "_blank");
  };

  return (
    <div className="container">
      <h2>Broadcast Undangan nich😘</h2>
      <input
        type="text"
        placeholder="Masukkan nama, pisahkan dengan koma"
        value={names}
        onChange={(e) => setNames(e.target.value)}
      />
      <button onClick={generateInvitation}>Buat Undangan</button>
      {inviteLink && (
        <div>
          <p>Link Undangan:</p>
          <a href={inviteLink} target="_blank" rel="noopener noreferrer">
            {inviteLink}
          </a>
          <button onClick={sendToWhatsApp}>Kirim ke WhatsApp</button>
        </div>
      )}
      {/* {message && <pre>{message}</pre>} */}
    </div>
  );
}

export default App;
