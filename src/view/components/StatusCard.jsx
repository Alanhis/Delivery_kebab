const React = require("react");

module.exports = function StatusCard({ order }) {
  return (
    <tbody id={order.id} key={order.id}>
        <tr>
        <th scope="row">{order.id}</th>
        <td>{order['Item.name']}</td>
        <td>{order.status}</td>
        </tr>
    </tbody>
  );
};