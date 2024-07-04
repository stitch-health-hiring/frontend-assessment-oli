import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

type SortOrder = "asc" | "desc";

interface SortableThProps {
  column: string;
  label: string;
  sortedByColumn: string;
  sortOrder: SortOrder;
  onSort: (column: string) => void;
}

const Th = styled.th`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
`;

const Label = styled.span`
  cursor: pointer;
  user-select: none;
`;

const Icon = styled(FontAwesomeIcon)<{ isActive: boolean }>`
  opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};
  transition: opacity 0.3s;
  height: 10px; /* Make the chevron smaller */
  margin-left: 8px;
`;

const SortableTh: React.FC<SortableThProps> = ({
  column,
  label,
  sortedByColumn,
  sortOrder,
  onSort,
}) => {
  const isSorted = sortedByColumn === column;

  return (
    <Th onClick={() => onSort(column)}>
      <Label>{label}</Label>
      <Icon
        icon={sortOrder === "asc" ? faChevronUp : faChevronDown}
        isActive={isSorted}
      />
    </Th>
  );
};

export default SortableTh;
