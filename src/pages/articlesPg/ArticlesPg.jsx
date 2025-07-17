import React from "react";
import "./ArticlesPg.css";
import { popular } from "../../assets/assets";
import GeneralNewsSection from "../../components/generalNewsSec/GeneralNewsSection";

const ArticlesPg = () => {
  return (
    <main className="container">
      <div className="articlesPg-title">
        <h1>BÀI VIẾT</h1>
      </div>
      <div className="articlesPg-wrapper">
        <GeneralNewsSection title={"Thời luận"} rows={3} />
        <GeneralNewsSection title={"Văn hóa xã hội"} rows={3} />
        <GeneralNewsSection title={"Tôi viết"} rows={3} />
        <GeneralNewsSection title={"Hình ảnh và câu chuyện"} rows={3} />
        <GeneralNewsSection title={"Hồ sơ phá án"} rows={3} />
        <GeneralNewsSection title={"Chuyện thể thao"} rows={3} />
      </div>
    </main>
  );
};

export default ArticlesPg;
