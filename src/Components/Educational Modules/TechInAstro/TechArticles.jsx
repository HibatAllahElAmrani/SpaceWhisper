import { useParams } from "react-router-dom";
import technologies from "./TechInAstro.json";
import {techArticles} from "./TechArticles";
import ReactMarkdown from "react-markdown"; 

export default function TechArticles() {
  const {id} = useParams();
  const technology = technologies.find((t) => t.id === id);

  if (!technology) return <p>Technology not found</p>;

  const articleContent = techArticles[id];

  if (!articleContent) return <p>Article not found</p>;

  return (
    <div>
      <div className="article-content">
        <ReactMarkdown>
          {articleContent}
        </ReactMarkdown>
      </div>
    </div>
  );
}
