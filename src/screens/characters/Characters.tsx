import React from "react";
import styled from "styled-components";
import { logo } from "../../assets";

const Container = styled.div`
  width: 975px;
  padding: 30px 20px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1264px) {
    width: 100%;
  }
`;

const UserInfo = styled.section`
  display: flex;
`;
const UserProfileImgWrap = styled.div`
  padding: 75px;
  margin-right: 30px;

  & img {
    width: 145px;
    height: 145px;
    object-fit: cover;
    border-radius: 75px;

    @media (max-width: 748px) {
      width: 77px;
      height: 77px;
    }
  }

  @media (max-width: 748px) {
    padding: 0;
  }
`;
const RoundEffectImg = styled.div`
  width: 150px;
  height: 150px;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 75px;
  border: 1px solid transparent;
  overflow: hidden;
  background-image: radial-gradient(
      circle farthest-corner at 32% 106%,
      #ffe17d 0%,
      #ffcd69 10%,
      #fa9137 28%,
      #eb4141 42%,
      transparent 82%
    ),
    linear-gradient(135deg, #234bd7 12%, #c33cbe 58%);

  @media (max-width: 748px) {
    width: 79px;
    height: 79px;
  }
`;
const Icon = styled.div`
  width: 18px;
  height: 18px;
  background-image: url(${logo.sprite});
  background-position: 0 -369px;
`;
const NameInfo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;
  & > span {
    font-size: 20px;
    margin-right: 8px;
  }
`;

const RightSection = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;
const FeedNumInfo = styled.ul`
  height: 48px;
  display: flex;
  align-items: center;

  & > li > span:first-child {
    font-size: 16px;
    font-weight: 600;
    margin-right: 4px;
  }
`;

const FeedSummary = styled.div`
  flex-grow: 1;
  & > span {
    display: block;
  }
  & > span:nth-child(2) {
    white-space: pre;
  }

  @media (max-width: 748px) {
    display: none;
  }
`;

const Feeds = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-top: 44px;
  gap: 4px;
  width: 100%;
`;

const Feed = styled.article`
  width: 33%;
  height: 0;
  padding-bottom: 33%;
  position: relative; /* 포지셔닝을 위해 relative를 설정합니다. */

  & > img {
    position: absolute; /* 포지셔닝을 위해 relative를 설정합니다. */

    width: 100%;
    height: 100%;
  }
`;

const datas = [
  {
    id: 14,
    name: "A.J. Arno",
    imageUrl:
      "https://static.wikia.nocookie.net/disney/images/2/2c/A.J._Arno.jpg",
  },
  {
    id: 16,
    name: "Abdullah",
    imageUrl:
      "https://static.wikia.nocookie.net/disney/images/c/cb/1087603-44532-clp-950.jpg",
  },
  {
    id: 18,
    name: "Abigail the Cow",
    imageUrl:
      "https://static.wikia.nocookie.net/disney/images/0/05/Fox-disneyscreencaps_com-901.jpg",
  },
  {
    id: 21,
    name: "Abis Mal's Thugs",
    imageUrl:
      "https://static.wikia.nocookie.net/disney/images/b/ba/Abis_Mal%27s_Thugs.jpg",
  },
  {
    id: 24,
    name: "Absolem",
    imageUrl:
      "https://static.wikia.nocookie.net/disney/images/4/4d/Caterpillar.jpg",
  },
  {
    id: 25,
    name: "Abu",
    imageUrl:
      "https://static.wikia.nocookie.net/disney/images/3/3f/Profile_-_Abu.png",
  },
  {
    id: 30,
    name: "Ace",
    imageUrl:
      "https://static.wikia.nocookie.net/disney/images/1/1e/Profile_-_Ace.png",
  },
  {
    id: 31,
    name: "Achilles",
    imageUrl:
      "https://static.wikia.nocookie.net/disney/images/8/8f/Achilles_HOND.jpg",
  },
];

const Characters = () => {
  return (
    <Container>
      <UserInfo>
        <UserProfileImgWrap>
          <RoundEffectImg>
            <img src={logo.disney} />
          </RoundEffectImg>
        </UserProfileImgWrap>
        <RightSection>
          <NameInfo>
            <span>disneypluskr</span> <Icon />
          </NameInfo>
          <FeedNumInfo>
            <li>
              <span>317k</span>
              <span>followers</span>
            </li>
          </FeedNumInfo>
          <FeedSummary>
            <span>디즈니+코리아</span>
            <span>
              {`6월 주요 라인업
 🌊아바타: 물의 길
 🏨세인트 엑스
 🎲더 존: 버텨야산다
 🕺풀 몬티
 ✏️애봇 초등학교
 🦖문걸과 데블 다이노소어
 이 모든 이야기를 디즈니+에서`}
            </span>
          </FeedSummary>
        </RightSection>
      </UserInfo>
      <Feeds>
        {datas.map((data) => (
          <Feed key={data.id}>
            <img src={data.imageUrl} />
          </Feed>
        ))}
      </Feeds>
    </Container>
  );
};

export default Characters;
