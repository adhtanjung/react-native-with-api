"use strict";

module.exports = {
	up: async (queryInterface, DataTypes) => {
		/**
		 * Add altering commands here.
		 *
		 * Example:
		 * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
		 */

		await queryInterface.addColumn("carts", "productId", {
			type: DataTypes.INTEGER,
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
