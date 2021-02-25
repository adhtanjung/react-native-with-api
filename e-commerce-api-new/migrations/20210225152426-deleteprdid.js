"use strict";

const { query } = require("express");

module.exports = {
	up: async (queryInterface, DataTypes) => {
		/**
		 * Add altering commands here.
		 *
		 * Example:
		 * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
		 */

		await queryInterface.removeColumn("carts", "productId");
		await queryInterface.addColumn("carts", "productId", {
			type: DataTypes.INTEGER,
			references: {
				model: "products",
				key: "id",
			},
		});
	},

	down: async (queryInterface, DataTypes) => {
		/**
		 * Add reverting commands here.
		 *
		 * Example:
		 * await queryInterface.dropTable('users');
		 */
	},
};
