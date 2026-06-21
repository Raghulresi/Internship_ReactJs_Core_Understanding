function List_map()
{
    const list = ["Apple","Mango","Grape"];
    return(
        <div>
            <h1>Listing value from map(object)</h1>
            <ul>
                {list.map( (list) =>
                                  <li>{list}</li>
                         )
                }
            </ul>
        </div>
    );
}
export default List_map;