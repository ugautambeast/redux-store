import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { actionUpdateCategory, actionUpdateCurrentCategory } from '../../redux/user/userAction';


function CategoryMenu() {
  const { categories } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch(actionUpdateCategory({
        categories: categoryData.categories,
      }));
      categoryData.categories.forEach((category) => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('categories', 'get').then((categories) => {
        dispatch(actionUpdateCategory({
          categories: categories,
        }));
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch(actionUpdateCurrentCategory({
      currentCategory: id,
    }));
  };

  return (
    <div>
      <h2>Choose a Category:</h2>
      {categories.map((item) => (
        <button
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryMenu;
