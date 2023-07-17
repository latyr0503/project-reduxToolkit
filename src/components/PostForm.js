import React, { useRef } from "react";
import { useSelector } from "react-redux";

const PostForm = () => {
  const form = useRef();
  const user = useSelector((state) => state.userReducer)

  const handlerForm = async (e) => {
    e.preventDefault();

    // console.log(form);

    const postData = {
      author: user.pseudo,    
      title: form.current[0].value,
      content: form.current[1].value,
      like: 0,
    };

    dispatch(add)

  };
  return (
    <div className="form-container">
      <form ref={form} onSubmit={e => handlerForm(e)}>
        <input type="text" placeholder="Titre du poste" />
        <textarea placeholder="Postez vos pensées..."></textarea>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default PostForm;
