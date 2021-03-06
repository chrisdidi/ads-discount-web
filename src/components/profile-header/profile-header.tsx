import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import React, { useCallback, useRef, useState } from "react";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import {
  getMyDiscounts,
  getMyDiscountsVariables,
  getMyDiscounts_myDiscounts_data_discounts,
} from "../../__generated__/getMyDiscounts";

const MY_DISCOUNTS = gql`
  query getMyDiscounts($id: Float!) {
    myDiscounts(id: $id) {
      data {
        name
        discounts {
          min_purchase
          newPrice
          adType {
            name
            price
          }
          freeQuantity
          freeAd {
            name
          }
        }
      }
    }
  }
`;

interface IProps {
  id: number;
}
const ProfileHeader: React.FC<IProps> = ({ id }) => {
  const [showDiscounts, setShowDiscounts] = useState(false);
  const { data, loading } = useQuery<getMyDiscounts, getMyDiscountsVariables>(
    MY_DISCOUNTS,
    {
      variables: {
        id,
      },
    }
  );

  const headerRef = useRef(null);

  useOnClickOutside(headerRef, () => setShowDiscounts(false));
  const toggleShow = () => {
    setShowDiscounts(!showDiscounts);
  };

  const convertDataToMessage = useCallback(
    (data: getMyDiscounts_myDiscounts_data_discounts) => {
      const minimumMessage = data.min_purchase > 0 && (
        <span>with minimum purchase of {data.min_purchase} or more!</span>
      );
      return (
        <div className=" p-2" key={`${data.adType.name}_${data.adType.price}`}>
          <p className=" font-semibold">{data.adType.name}</p>
          {data.newPrice !== null && (
            <p>
              Price:{" "}
              <span className=" line-through">{data.adType.price}/Ad</span>{" "}
              &rarr; <span className=" font-semibold">{data.newPrice}/Ad</span>{" "}
              {minimumMessage}
            </p>
          )}
          {data.freeAd !== null && (
            <p>
              Get {data.freeQuantity} {data.freeAd.name} {minimumMessage}
            </p>
          )}
        </div>
      );
    },
    []
  );
  if (!loading && data?.myDiscounts.data) {
    return (
      <div ref={headerRef} className=" w-full fixed top-0 left-0 z-20">
        <div className="bg-yellow-200 flex justify-between items-center p-2 w-full relative">
          <p className="text-yellow-700 font-semibold">
            {data.myDiscounts.data.name}
          </p>
          {data.myDiscounts.data.discounts &&
            data.myDiscounts.data.discounts.length > 0 && (
              <div
                onClick={toggleShow}
                className="bg-yellow-500 rounded-md p-1 px-2 animate-bounce shadow-md cursor-pointer"
              >
                <p className=" text-white ">VIEW OFFER</p>
              </div>
            )}
          <div
            className={`w-auto px-2 mt-2 overflow-hidden absolute  top-full right-0 h-auto transition-all duration-500 ${
              showDiscounts ? "max-h-screen " : "max-h-0"
            }`}
          >
            <div className=" w-full p-3 mb-2 text-gray-600 bg-red-50 rounded-lg shadow-md ">
              <p className=" font-semibold text-lg ">
                We have a special package for you!
              </p>
              <div>
                {data.myDiscounts.data.discounts &&
                  data.myDiscounts.data.discounts.map((discount, index) =>
                    convertDataToMessage(discount)
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <div></div>;
};

export default ProfileHeader;
