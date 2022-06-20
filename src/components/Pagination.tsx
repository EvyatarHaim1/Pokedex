import React from "react";
import { ButtonGroup, Flex } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

import Button from "./PaginationBtn";

interface Props {
  lastPage: number;
  currentPage: number;
  setCurrentPage(page: number): void;
}

const Pagination: React.FC<Props> = ({
  lastPage,
  currentPage,
  setCurrentPage
}) => {
  const nextPage = async () => {
    if (currentPage < lastPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPage = async () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const selectPage = async (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Flex direction="column">
      <Flex h="56px" align="end" mt="28px">
        <Button
          label="previous page"
          icon={<ArrowLeftIcon />}
          isDisabled={currentPage === 1}
          onChangePage={previousPage}
        />
        <Flex bg="white" justify="start" align="start" mx="16px" rounded="8px">
          {1 < lastPage ? (
            <ButtonGroup spacing={0}>
              <Button
                onChangePage={() => selectPage(1)}
                label="1"
                title="1"
                selected={currentPage === 1}
              />
              <Button
                onChangePage={() => selectPage(currentPage)}
                label={currentPage.toString()}
                selected={currentPage !== 1 && currentPage !== lastPage}
                isDisabled={currentPage === 1 || currentPage === lastPage}
                title={
                  currentPage === 1 || currentPage === lastPage
                    ? "..."
                    : currentPage.toString()
                }
              />
              <Button
                onChangePage={() => selectPage(lastPage)}
                label={lastPage.toString()}
                title={lastPage.toString()}
                selected={currentPage === lastPage}
              />
            </ButtonGroup>
          ) : (
            <Button
              onChangePage={() => selectPage(1)}
              label="1"
              title="1"
              selected={currentPage === 1}
            />
          )}
        </Flex>
        <Button
          label="next page"
          icon={<ArrowRightIcon />}
          onChangePage={nextPage}
          isDisabled={currentPage === lastPage}
        />
      </Flex>
    </Flex>
  );
};

export default Pagination;
