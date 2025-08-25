import "./StoriesStyle.css";
import { useFormContext } from "../../formContext";
import { useApiContext } from "./../../apiContext";
import { Link } from "react-router-dom";
import Loading from "./../loading/Loading";
import EmptySearch from "./../error/EmptySearch";
import Button from "../button/Button";
import { useEffect, useState } from "react";
const Stories = () => {
  const { isLoading, hits, removeStory } = useApiContext();
  const { currentUser } = useFormContext();
  const [moreRead, setMoreRead] = useState(false);
  useEffect(() => {
    if (hits.length > 4) setMoreRead(true);
  }, [hits.length]);
  if (isLoading) return <Loading />;

  if (hits.length === 0) return <EmptySearch />;

  return (
    <section className="stories-section">
      <div className="story-container">
        <div className="story-center stories-wrapper">
          {hits
            .slice(0, currentUser.loggedIn ? hits.length : 4)
            .map((story) => {
              const { objectID, title, num_comments, url, points, author } =
                story;
              return (
                <article key={objectID} className="story">
                  <h4 className="title">{title}</h4>
                  <div className="info-wrapper">
                    <p className="point">
                      {points} points by <span>{author} </span>
                    </p>

                    <p className="comment">{num_comments} comments</p>
                  </div>
                  <div className="links-wrapper">
                    <a
                      href={url}
                      className="read-link"
                      target="_black"
                      rel="noopener noreferrer"
                    >
                      원문 보기
                    </a>
                    {currentUser.loggedIn && (
                      <button
                        className="remove-btn"
                        onClick={() => removeStory(objectID)}
                      >
                        삭제
                      </button>
                    )}
                  </div>
                </article>
              );
            })}
        </div>
        {!currentUser.loggedIn && moreRead && (
          <div className="locked-story login-prompt">
            <Link to="/login">
              로그인 후 더 많은 정보를 확인하실 수 있습니다
            </Link>
          </div>
        )}
      </div>
      {currentUser.loggedIn && <Button />}
    </section>
  );
};

export default Stories;
