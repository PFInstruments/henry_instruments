module.exports = {
    getHtmlForOrder: (idOrder, date, products, totalAmount) => {
        products = products.map((prod) => {
            return `<tr>
                <th>${prod.category}</th>
                <th>${prod.quantity}</th>
                <td>${prod.brand}</td>
                <td>${prod.model}</td>
                <td>$${prod.price}</td>
            </tr>`;
        });
        const ip = "https://henry-instruments-one.vercel.app/success";
        const html = `<!DOCTYPE html>
            <html>
                <head>
                    <title>Payment confirmation</title>
                    <style>
            /* Estilo para el contenido principal */
                        .main-content {
                            width: 80%;
                            margin: 0 auto;
                            text-align: center;
                        }

            /* Estilo para los encabezados */
                        h1, h2 {
                            color: #303030;
                        }

            /* Estilo para los botones */
                        .btn {
                            text-decoration: none;
                            background-color: #303030;
                            color: #fff;
                            padding: 12px 24px;
                            border-radius: 4px;
                        }
                    </style>
                </head>
                <body>
                    <div class="main-content">
                        <h1>Thanks for your purchase!</h1>
                        <h2>Payment summary</h2>
                        <p>Order ID: ${idOrder}</p>
                        <p>Payment date: ${date}</p>
                        <p>Total Amount: $${totalAmount}</p>
                        <table class="main-content">
                            <tr>
                                <th scope="col">Category</th>
                                <th>Quantity</th> 
                                <th>Brand</th> 
                                <th>Model</th>
                                <th>Price</th>
                            </tr>
                            ${products}
                        </table>

                        <br>
                        <a href="${ip}" class="btn">View order details</a>
                    </div>
                        
                </body>
            </html>`;
        return html;
    },
};
