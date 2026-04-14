import { useParams } from "react-router-dom";
import questions from "./BigQuestions.json";
import { articles } from "./BigQuestionsArticles";
import ReactMarkdown from "react-markdown"; 

export default function BigQuestionArticle() {
  const { id } = useParams();
  const question = questions.find((q) => q.id === id);

  if (!question) return <p>Question not found</p>;

  const articleContent = articles[id];

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
