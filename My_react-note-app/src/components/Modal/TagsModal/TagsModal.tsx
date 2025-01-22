import { FC, useState } from "react";
import { Tag } from "styled-components/dist/sheet/types";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { DeleteBox, FixedContainer } from "../Modal.styles";
import { Box, StyledInput, TagsBox } from "./TagModal.styles";
import { FaTimes } from "react-icons/fa";
import { toggleTagsModal } from "../../../store/modal/modalSlice";
import getStandardName from "../../../utils/getStandardName";
import { v4 } from "uuid";
import { addTags, deleteTags } from "../../../store/tags/tagsSlice";
import { removeTags } from "../../../store/notesList/notesListSlice";

interface TagsModalProps {
  type: string;
  addedTags?: Tag[];
  handleTags?: (tag: string, type: string) => void;
}
const TagsModal: FC<TagsModalProps> = ({ type, addedTags, handleTags }) => {
  const dispatch = useAppDispatch();
  const { tagsList } = useAppSelector((state) => state.tags);
  const [inputText, setInputText] = useState("");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputText) {
      return;
    }
    dispatch(addTags({ tag: inputText.toLowerCase(), id: v4() }));
    setInputText("");
  };
  const deleteTagsHandler = (tag: string, id: string) => {
    dispatch(deleteTags(id));
    dispatch(removeTags({ tag }));
  };
  return (
    <FixedContainer>
      <Box>
        <div className="editTags__header">
          <div className="editTags__title">
            {type === "add" ? "Add" : "Edit"} Tags
          </div>
          <DeleteBox
            className="editTags__close"
            onClick={() => dispatch(toggleTagsModal({ type, view: false }))}
          >
            <FaTimes />
          </DeleteBox>
        </div>
        <form onSubmit={submitHandler}>
          <StyledInput
            type="text"
            value={inputText}
            placeholder="New Tag..."
            onChange={(e) => setInputText(e.target.value)}
          />
        </form>
        <TagsBox>
          {tagsList.map(({ tag, id }) => (
            <li key={id}>
              <div className="editTags__tag">{getStandardName(tag)}</div>
              <DeleteBox onClick={() => deleteTagsHandler(tag, id)}>
                <FaTimes />
              </DeleteBox>
            </li>
          ))}
        </TagsBox>
      </Box>
    </FixedContainer>
  );
};

export default TagsModal;
