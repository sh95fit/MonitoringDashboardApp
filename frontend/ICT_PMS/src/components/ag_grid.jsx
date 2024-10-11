import React, { Component } from "react";

import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS

export default class Aggrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 컬럼 생성
      columnDefs: [
        { headerName: "제목", field: "title" },
        { headerName: "저자", field: "author" },
        { headerName: "출판 연도", field: "year" },
        { headerName: "장르", field: "genre" },
        { headerName: "상태", field: "status" },
      ],
    };
  }

  render() {
    const { columnDefs } = this.state;

    return (
      <div className="ag-theme-alpine" style={{ width: "97vw", height: "48vh" }}>
        <AgGridReact headerHeight="30" columnDefs={columnDefs} />
      </div>
    );
  }
}