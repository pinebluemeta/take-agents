import type { FC } from "react";
import { Link } from "react-router-dom";
import { IAgent } from "../../types/Agent";
import "./Agent.css";

const Agent: FC<{ agent: IAgent }> = ({ agent }) => {
  return (
    <Link to={`/agents/${agent.id}`} className="container">
      <header>
        <div className="avatar-holder">
          <img src={agent.photoUrl} className="avatar" alt={agent.firstName} />
        </div>
        <h2 className="agent-name">{agent.firstName + " " + agent.lastName}</h2>
      </header>
      <div className="body">{agent.aboutMe}</div>
      <footer>
        <div className="full-width-flex-box">
          <div className="one-third-flex-box">
            <span>{agent.address}</span>
          </div>
          <div className="one-third-flex-box">
            <span>Areas of Practice: {agent.practiceAreas}</span>
          </div>
        </div>
      </footer>
    </Link>
  );
};

export default Agent;
