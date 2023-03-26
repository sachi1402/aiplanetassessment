import { createSlice } from "@reduxjs/toolkit";

const img1 = require("../../assets/Lorem ipsum.png");
const img2 = require("../../assets/InterviewMe.png");
const img3 = require("../../assets/Pizza Ipsum.png");
const img4 = require("../../assets/Potter ipsum.png");
const initialState = {
  myArray: [
    {
      id: 1,
      title: "InterviewMe",
      image: img1,
      summary: "Built with GPT-3, React, and Flask. Practice interviews with AI and ace your next interview.",
      description: "Lorem ipsum dolor sit amet consectetur. Lacus sit aliquam vivamus sodales a integer justo elit. Mattis urna non parturient est non faucibus pretium morbi. Mattis condimentum arcu sapien nunc semper in laoreet amet cursus. At purus consectetur orci morbi at. Gravida consectetur nunc in quis vitae egestas. Fermentum pellentesque ullamcorper nisl massa penatibus condimentum non imperdiet. Porttitor a hendrerit pellentesque enim mus congue. Vitae interdum fusce duis ac posuere in aliquam risus aenean. Mi aliquet viverra ipsum lacus condimentum tincidunt. In bibendum imperdiet nullam eget tincidunt. Ut lorem id enim interdum lobortis aliquam risus elementum aliquet. Placerat fusce proin diam sollicitudin netus tincidunt sit ultricies. Varius convallis ultrices fermentum in commodo ut posuere. Lacus luctus lacus consequat dolor. Lacus vulputate molestie mattis penatibus risus quam elit gravida auctor. Eget morbi maecenas nam in. Felis urna non id adipiscing sed cursus nec arcu. Egestas placerat blandit sed quis sed vitae. Porta at ac turpis gravida leo. Ipsum in laoreet facilisi arcu. Proin vulputate mi viverra dignissim sollicitudin interdum ultrices. Habitant eget dapibus pharetra blandit quis sagittis pulvinar fames vel.Sit gravida cursus ligula fames lacus. Bibendum lectus nunc dapibus dui lectus velit porta. Sit id elementum urna at ut lorem aliquet. Pharetra sit malesuada tellus eget urna ultrices lectus et cursus. Bibendum leo id consectetur vel lectus mi urna in diam. Egestas metus enim elementum turpis felis. Leo ultrices adipiscing viverra ac. Maecenas a odio ac velit in tortor faucibus quam quis. Ut sapien auctor lacus pretium nec eu sed sit. Nulla quis sed massa maecenas.",
      hackathonName: "Prestige Interview Challenge",
      hackathonStartDate: "24 Feb 2023 ",
      hackathonEndDate: "24 March 2023",
      githubRepoLink: "http://www.github.com/sad",
      otherLink: "http://www.oo.com/sad",
      fav: true,
    },
    {
      id: 2,
      title: "Foodie Finder",
      image: img2,
      summary: "Find the best local restaurants and discover new food options with Foodie Finder.",
      description: "Lorem ipsum dolor sit amet consectetur. Lacus sit aliquam vivamus sodales a integer justo elit. Mattis urna non parturient est non faucibus pretium morbi. Mattis condimentum arcu sapien nunc semper in laoreet amet cursus. At purus consectetur orci morbi at. Gravida consectetur nunc in quis vitae egestas. Fermentum pellentesque ullamcorper nisl massa penatibus condimentum non imperdiet. Porttitor a hendrerit pellentesque enim mus congue. Vitae interdum fusce duis ac posuere in aliquam risus aenean. Mi aliquet viverra ipsum lacus condimentum tincidunt. In bibendum imperdiet nullam eget tincidunt. Ut lorem id enim interdum lobortis aliquam risus elementum aliquet. Placerat fusce proin diam sollicitudin netus tincidunt sit ultricies. Varius convallis ultrices fermentum in commodo ut posuere. Lacus luctus lacus consequat dolor. Lacus vulputate molestie mattis penatibus risus quam elit gravida auctor. Eget morbi maecenas nam in. Felis urna non id adipiscing sed cursus nec arcu. Egestas placerat blandit sed quis sed vitae. Porta at ac turpis gravida leo. Ipsum in laoreet facilisi arcu. Proin vulputate mi viverra dignissim sollicitudin interdum ultrices. Habitant eget dapibus pharetra blandit quis sagittis pulvinar fames vel.Sit gravida cursus ligula fames lacus. Bibendum lectus nunc dapibus dui lectus velit porta. Sit id elementum urna at ut lorem aliquet. Pharetra sit malesuada tellus eget urna ultrices lectus et cursus. Bibendum leo id consectetur vel lectus mi urna in diam. Egestas metus enim elementum turpis felis. Leo ultrices adipiscing viverra ac. Maecenas a odio ac velit in tortor faucibus quam quis. Ut sapien auctor lacus pretium nec eu sed sit. Nulla quis sed massa maecenas.",
      hackathonName: "Foodie Challenge",
      hackathonStartDate: "15 March 2023",
      hackathonEndDate: "30 March 2023",
      githubRepoLink: "http://www.github.com/foodie",
      otherLink: "http://www.foodie.com",
      fav: false,
      },
      {
        id: 3,
        title: "FitTrack",
        image: img3,
        summary: "An app that tracks your fitness progress and helps you achieve your health goals.",
        description: "Lorem ipsum dolor sit amet consectetur. Lacus sit aliquam vivamus sodales a integer justo elit. Mattis urna non parturient est non faucibus pretium morbi. Mattis condimentum arcu sapien nunc semper in laoreet amet cursus. At purus consectetur orci morbi at. Gravida consectetur nunc in quis vitae egestas. Fermentum pellentesque ullamcorper nisl massa penatibus condimentum non imperdiet. Porttitor a hendrerit pellentesque enim mus congue. Vitae interdum fusce duis ac posuere in aliquam risus aenean. Mi aliquet viverra ipsum lacus condimentum tincidunt. In bibendum imperdiet nullam eget tincidunt. Ut lorem id enim interdum lobortis aliquam risus elementum aliquet. Placerat fusce proin diam sollicitudin netus tincidunt sit ultricies. Varius convallis ultrices fermentum in commodo ut posuere. Lacus luctus lacus consequat dolor. Lacus vulputate molestie mattis penatibus risus quam elit gravida auctor. Eget morbi maecenas nam in. Felis urna non id adipiscing sed cursus nec arcu. Egestas placerat blandit sed quis sed vitae. Porta at ac turpis gravida leo. Ipsum in laoreet facilisi arcu. Proin vulputate mi viverra dignissim sollicitudin interdum ultrices. Habitant eget dapibus pharetra blandit quis sagittis pulvinar fames vel.Sit gravida cursus ligula fames lacus. Bibendum lectus nunc dapibus dui lectus velit porta. Sit id elementum urna at ut lorem aliquet. Pharetra sit malesuada tellus eget urna ultrices lectus et cursus. Bibendum leo id consectetur vel lectus mi urna in diam. Egestas metus enim elementum turpis felis. Leo ultrices adipiscing viverra ac. Maecenas a odio ac velit in tortor faucibus quam quis. Ut sapien auctor lacus pretium nec eu sed sit. Nulla quis sed massa maecenas.",
        hackathonName: "FitTech Hackathon",
        hackathonStartDate: "10 April 2023",
        hackathonEndDate: "12 April 2023",
        githubRepoLink: "http://www.github.com/fittrack",
        otherLink: "http://www.oo.com/fittrack",
        fav: false,
      },
      {
        id: 4,
        title: "Green Hack",
        image: img4,
        summary: "Create innovative solutions to help the environment in this hackathon focused on sustainability.",
        description: "Lorem ipsum dolor sit amet consectetur. Lacus sit aliquam vivamus sodales a integer justo elit. Mattis urna non parturient est non faucibus pretium morbi. Mattis condimentum arcu sapien nunc semper in laoreet amet cursus. At purus consectetur orci morbi at. Gravida consectetur nunc in quis vitae egestas. Fermentum pellentesque ullamcorper nisl massa penatibus condimentum non imperdiet. Porttitor a hendrerit pellentesque enim mus congue. Vitae interdum fusce duis ac posuere in aliquam risus aenean. Mi aliquet viverra ipsum lacus condimentum tincidunt. In bibendum imperdiet nullam eget tincidunt. Ut lorem id enim interdum lobortis aliquam risus elementum aliquet. Placerat fusce proin diam sollicitudin netus tincidunt sit ultricies. Varius convallis ultrices fermentum in commodo ut posuere. Lacus luctus lacus consequat dolor. Lacus vulputate molestie mattis penatibus risus quam elit gravida auctor. Eget morbi maecenas nam in. Felis urna non id adipiscing sed cursus nec arcu. Egestas placerat blandit sed quis sed vitae. Porta at ac turpis gravida leo. Ipsum in laoreet facilisi arcu. Proin vulputate mi viverra dignissim sollicitudin interdum ultrices. Habitant eget dapibus pharetra blandit quis sagittis pulvinar fames vel.Sit gravida cursus ligula fames lacus. Bibendum lectus nunc dapibus dui lectus velit porta. Sit id elementum urna at ut lorem aliquet. Pharetra sit malesuada tellus eget urna ultrices lectus et cursus. Bibendum leo id consectetur vel lectus mi urna in diam. Egestas metus enim elementum turpis felis. Leo ultrices adipiscing viverra ac. Maecenas a odio ac velit in tortor faucibus quam quis. Ut sapien auctor lacus pretium nec eu sed sit. Nulla quis sed massa maecenas.",
        hackathonName: "Sustainability Hack",
        hackathonStartDate: "12 April 2023",
        hackathonEndDate: "15 April 2023",
        githubRepoLink: "http://www.github.com/greenhack",
        otherLink: "http://www.greenhack.com",
        fav: true,
      }
      
  ],
};

const myArraySlice = createSlice({
  name: "hackathons",
  initialState,
  reducers: {
    // Add new element to the array
    addElement: (state, action) => {
      console.log("s22");
      const {
        id,
        title,
        image,
        summary,
        description,
        hackathonName,
        hackathonStartDate,
        hackathonEndDate,
        githubRepoLink,
        otherLink,
        fav,
      } = action.payload;
      state.myArray.push({
        id,
        title,
        image,
        summary,
        description,
        hackathonName,
        hackathonStartDate,
        hackathonEndDate,
        githubRepoLink,
        otherLink,
        fav,
      });
    },
    // Delete element from the array by ID
    deleteElement: (state, action) => {
      const elementIndex = state.myArray.findIndex(
        (element) => element.id === action.payload
      );
      if (elementIndex !== -1) {
        state.myArray.splice(elementIndex, 1);
      }
    },
    // Edit element in the array by ID
    editElement: (state, action) => {
      const {
        id,
        title,
        image,
        summary,
        description,
        hackathonName,
        hackathonStartDate,
        hackathonEndDate,
        githubRepoLink,
        otherLink,
        fav,
      } = action.payload;
      console.log(action.payload, "hi called");
      const elementIndex = state.myArray.findIndex(
        (element) => element.id === id
      );
      if (elementIndex !== -1) {
        state.myArray[elementIndex] = {
          id,
          title,
          image,
          summary,
          description,
          hackathonName,
          hackathonStartDate,
          hackathonEndDate,
          githubRepoLink,
          otherLink,
          fav,
        };
      }
    },
    // Toggle favorite status of an element by ID
    toggleFav: (state, action) => {
      const elementIndex = state.myArray.findIndex(
        (element) => element.id === action.payload
      );
      if (elementIndex !== -1) {
        state.myArray[elementIndex].fav = !state.myArray[elementIndex].fav;
      }
    },
  },
});

// Export the reducer and actions
export const reducers = myArraySlice.reducer;
export const { addElement, deleteElement, editElement, toggleFav } = myArraySlice.actions;
