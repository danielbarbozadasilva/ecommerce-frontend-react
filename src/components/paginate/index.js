import React from "react";
import { SContainer, TextSelect, SButton } from './styled'

const PaginationComponent = ({ pages, currentPage, itensPerPage, setCurrentPage }) => {

	const goToPage = (page) => {
		setCurrentPage(page);
	}

	return (
		<SContainer>
			<TextSelect>{(currentPage * itensPerPage) + 1}-{(currentPage + 1) * (itensPerPage)} de {itensPerPage * pages}</TextSelect>
			<SButton 
				onClick={(e) => goToPage(0)}
				disabled={currentPage == 0}
			>&#171;</SButton>
			<SButton
				onClick={(e) => goToPage(currentPage - 1)}
				disabled={currentPage == 0}
			>&lt;</SButton>
			<SButton
				onClick={(e) => goToPage(currentPage + 1)}
				disabled={currentPage == (pages - 1)}
			>&gt;</SButton>
			<SButton
				onClick={(e) => goToPage(pages - 1)}
				disabled={currentPage == (pages - 1)}
			>&#187;</SButton>
		</SContainer>
	);
};

export default PaginationComponent;