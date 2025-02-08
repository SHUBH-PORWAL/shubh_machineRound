import logo from "./logo.svg";
import "./styles/globals.css";
import CardView from "./components/CardView";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchPosts } from "./store/postsSlice";
import { LOADING_DELAY } from "./utils/constants";
import ViewToggle from "./components/ViewToggle";
import Pagination from "./components/Pagination";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.posts);
  const [isListView, setIsListView] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(fetchPosts());
    }, LOADING_DELAY);
    return () => clearTimeout(timer);
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-xl font-semibold text-gray-700">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-xl font-semibold text-red-600">Error :{error}</div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4 min-h-screen bg-gray-50">
      <div className="flex justify-between items-center mb-4">
        <ViewToggle isListView={isListView} toggleView={setIsListView} />
        <button
          onClick={() => {
            setShowFeedback(true);
          }}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
        >
          We are Listening
        </button>
        <CardView isListView={isListView} />
        <Pagination />
        <FeedbackForm
          isOpen={showFeedback}
          onClose={() => setShowFeedback(false)}
        />
      </div>
    </div>
  );
}

export default App;
