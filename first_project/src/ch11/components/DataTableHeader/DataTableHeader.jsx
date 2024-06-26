import { useEffect, useRef, useState } from "react";
import "./style.css";
import Swal from "sweetalert2";


function DataTableHeader({ mode, setMode, products, setProducts, setDeleting, editProductItd }) {

    const emptyProduct = {
        id: "",
        productName: "",
        size: "",
        color: "",
        price: ""
    };

    const inputRef = {
        productName: useRef(),
        size: useRef(),
        color: useRef(),
        price: useRef()
    }

    const [inputData, setInputData] = useState({ ...emptyProduct });

    useEffect(() => {
        const [product] = products.filter(product => product.id === editProductItd); // 비구조 할당. filter를 걸었을 때 처음 값 하나만 product에 저장
        setInputData(!product ? { ...emptyProduct } : { ...product }); // input에 체크한 데이터의 값이 입력됨 없으면 emptyProduct객체를 넣어줌 
    }, [editProductItd]);

    const handleInputChange = (e) => {
        setInputData(inputData => ({
            ...inputData,
            [e.target.name]: e.target.value
        }));
    }

    const handleInputKeyDown = (e) => {
        if (e.keyCode === 13) {
            if (e.target.name === "productName") {
                inputRef.size.current.focus();
            }
            if (e.target.name === "size") {
                inputRef.color.current.focus();
            }
            if (e.target.name === "color") {
                inputRef.price.current.focus();
            }
            if (e.target.name === "price") {
                handleSubmitClick();
                inputRef.productName.current.focus();
            }
        }
    }

    const handleChangeModeClick = (e) => {
        setMode(parseInt(e.target.value));
    }

    const handleSubmitClick = () => {
        if (mode === 1) {
            setProducts(products => {
                const productIds = products.map(product => product.id);
                const maxId = productIds.length === 0 ? 0 : Math.max.apply(null, productIds);

                return [...products, { ...inputData, id: maxId + 1 }];
            });
            Swal.fire({
                title: "상품 정보 추가 완료",
                icon: "success",
                position: "top-end",
                showConfirmButton: false,
                timer: 500
            });
            resetMode();
        }

        if (mode === 2) {
            Swal.fire({
                title: "상품 정보 수정",
                showCancelButton: true,
                confirmButtonText: "확인",
                cancelButtonText: "취소"
            }).then(result => {
                if (result.isConfirmed) {
                    setProducts(products => [
                        ...products.map(product => {
                            if (product.id === editProductItd) {
                                const { id, ...rest } = inputData; // inputData에서 id를 제외하고 나머지 속성을 rest에 넣어줌
                                return {
                                    ...product,
                                    ...rest
                                }
                            }
                            return product;
                        })
                    ]);
                    resetMode();
                }
            });
        }

        if (mode === 3) {
            Swal.fire({
                title: "상품 정보 삭제",
                text: "정말로 삭제 하시겠습니까?",
                showCancelButton: true,
                confirmButtonText: "삭제",
                confirmButtonColor: "red",
                cancelButtonText: "취소"
            }).then(result => {
                if (result.isConfirmed) {
                    setDeleting(true);
                }
            });
        }

    }

    const handleCancelClick = () => {
        resetMode();
    }

    const resetMode = () => {
        setMode(0);
        setInputData({ ...emptyProduct });
    }

    return (
        <header className="table-header">
            <div className="input-group">
                <input
                    type="text"
                    disabled={mode === 0 || mode === 3}
                    name="productName"
                    value={inputData.productName}
                    placeholder="상품명"
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    ref={inputRef.productName}
                    autoFocus
                />
                <input
                    type="text"
                    disabled={mode === 0 || mode === 3}
                    name="size"
                    value={inputData.size}
                    placeholder="사이즈"
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    ref={inputRef.size}
                />
                <input
                    type="text"
                    disabled={mode === 0 || mode === 3}
                    name="color"
                    value={inputData.color}
                    placeholder="색상"
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    ref={inputRef.color}
                />
                <input
                    type="text"
                    disabled={mode === 0 || mode === 3}
                    name="price"
                    value={inputData.price}
                    placeholder="가격"
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    ref={inputRef.price}
                />
            </div>
            <div>
                {
                    !mode && (
                        <div className="button-group">
                            <button onClick={handleChangeModeClick} value={1}>추가</button>
                            <button onClick={handleChangeModeClick} value={2}>수정</button>
                            <button onClick={handleChangeModeClick} value={3}>삭제</button>
                        </div>
                    )
                }
                {
                    !!mode && (
                        <div className="button-group">
                            <button onClick={handleSubmitClick}>확인</button>
                            <button onClick={handleCancelClick}>취소</button>
                        </div>
                    )
                }

            </div>
        </header>
    );
}

export default DataTableHeader;