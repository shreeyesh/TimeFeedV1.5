import { Menu, Button, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import RankContainer from "./RankContainer";
import styles from "./HallOfFameContainer.module.css";
import { useState } from "react";

const HallOfFameContainer = () => {
  const [selectedCategory, setSelectedCategory] = useState("Categories");

  return (
    <div className={styles.desktop2}>
      <div className={styles.frameParent}>
        <div className={styles.hofheaderParent}>
          <div className={styles.hofheader}>
            <div className={styles.hallOfFame}>Hall of Fame</div>
            <div className={styles.rankfilters}>
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  colorScheme="nftwhite"
                >
                  {selectedCategory}
                </MenuButton>
                <MenuList colorScheme="black">
                  <MenuItem onClick={() =>setSelectedCategory("Art")}>Art</MenuItem>
                  <MenuItem onClick={() =>setSelectedCategory("Business")}>Business</MenuItem>
                  <MenuItem onClick={() =>setSelectedCategory("Comedy")}>Comedy</MenuItem>
                  <MenuItem onClick={() =>setSelectedCategory("Politics")}>Politics</MenuItem>
                  <MenuItem onClick={() =>setSelectedCategory("Movies")}>Movies</MenuItem>
                  <MenuItem onClick={() =>setSelectedCategory("Songs")}>Songs</MenuItem>
                  <MenuItem onClick={() =>setSelectedCategory("Travel")}>Travel</MenuItem>
              </MenuList>
              </Menu>
              <div className={styles.dayfilter}>
                <button className={styles.daily}>
                  <div className={styles.daily1}>DAILY</div>
                </button>
                <button className={styles.daily}>
                  <div className={styles.daily1}>WEEKLY</div>
                </button>
                <button className={styles.daily}>
                  <div className={styles.daily1}>MONTHLY</div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.halloffame}>
            <RankContainer
              playerName="1"
              playerScore="/image-29@2x.png"
              playerImageUrl="Bobby Axelrod"
              playerScoreDifference="23.46"
              playerRoundNumber="4"
              playerImageId="/image-291@2x.png"
              playerName2="Shany Rodriguez"
              playerScore2="22.28"
              playerName3="7"
              playerImageId2="/image-292@2x.png"
              playerName4="Damaris Leffler"
              playerScore2Difference="21.51"
            />
            <RankContainer
              playerName="2"
              playerScore="/image-293@2x.png"
              playerImageUrl="Christina Williams"
              playerScoreDifference="23.40"
              playerRoundNumber="5"
              playerImageId="/image-294@2x.png"
              playerName2="Krystina Mosciski"
              playerScore2="22.12"
              playerName3="8"
              playerImageId2="/image-295@2x.png"
              playerName4="Mya Tillman"
              playerScore2Difference="21.37"
            />
            <RankContainer
              playerName="3"
              playerScore="/image-296@2x.png"
              playerImageUrl="Gavin Belson"
              playerScoreDifference="23.00"
              playerRoundNumber="6"
              playerImageId="/image-297@2x.png"
              playerName2="Henry Denesik"
              playerScore2="21.93"
              playerName3="9"
              playerImageId2="/image-298@2x.png"
              playerName4="Haley Douglas"
              playerScore2Difference="21.15"
            />
            <RankContainer
              playerName="10"
              playerScore="/image-299@2x.png"
              playerImageUrl="Kabir Malhotra"
              playerScoreDifference="22.64"
              playerRoundNumber="11"
              playerImageId="/image-2910@2x.png"
              playerName2="Bored Ape Yacht"
              playerScore2="21.72"
              playerName3="12"
              playerImageId2="/image-2911@2x.png"
              playerName4="Roman Klocko"
              playerScore2Difference="20.87"
            />
          </div>
        </div>
        <img
          className={styles.vuesaxlinearrankingIcon}
          alt=""
          src="/vuesaxlinearranking.svg"
        />
      </div>
    </div>
  );
};

export default HallOfFameContainer;
