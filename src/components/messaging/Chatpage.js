import { PrettyChatWindow } from "react-chat-engine-pretty";
import "../../styling/MessagingSection.css";

const ChatsPage = ({ user }) => {
  const projectId = "4c4af054-358b-4205-bbc1-f87bad0b0a81";

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <PrettyChatWindow
        projectId={projectId}
        username={user.userName}
        secret={user.secret}
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default ChatsPage;
