
function TabContent ({id, currentTab, children}) {

  return (
    currentTab === id ? <div className="tabContent">
      {children}
    </div>
    :null
  )
};

export default TabContent;